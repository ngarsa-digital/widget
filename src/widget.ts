/**
 * ngarsa-widget - Core Widget Implementation
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */

import {
  NgarsaWidgetInstance,
  NgarsaWidgetOptions,
} from "./types";
import { DEFAULT_ASSETS, DEFAULT_COPY, DEFAULT_THEME } from "./defaults";
import { generateStyles } from "./styles";
import { CLOSE_ICON_SVG, SEND_ICON_SVG, WHATSAPP_ICON_SVG } from "./icons";
import { generateAvatar } from "./avatar";

let widgetCounter = 0;

export function createNgarsaWidget(
  options: NgarsaWidgetOptions,
): NgarsaWidgetInstance {
  if (typeof window === "undefined" || typeof document === "undefined") {
    // Graceful no-op for SSR environments
    return {
      open: () => {},
      close: () => {},
      toggle: () => {},
      isOpen: () => false,
      destroy: () => {},
      updateOptions: () => {},
      getElement: () => null,
    };
  }

  const id = `ngarsa-widget-${++widgetCounter}`;
  let currentOptions: NgarsaWidgetOptions = { ...options };

  const theme = { ...DEFAULT_THEME, ...currentOptions.theme };
  const copy = { ...DEFAULT_COPY, ...currentOptions.copy };
  const assets = { ...DEFAULT_ASSETS, ...currentOptions.assets };

  const getEffectiveAvatar = (): string => {
    return assets.avatarUrl || generateAvatar(copy.name, theme.primaryColor, theme.primaryTextColor);
  };

  // Create Root Container
  const root = document.createElement("div");
  root.id = id;
  root.setAttribute("role", "region");
  root.setAttribute("aria-label", "WhatsApp Support Widget");

  // Create Style Element
  const styleEl = document.createElement("style");
  styleEl.textContent = generateStyles(theme, id);
  root.appendChild(styleEl);

  // Time formatter
  const formatCurrentTime = (): string => {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, "0");
    const m = now.getMinutes().toString().padStart(2, "0");
    return `${h}.${m}`;
  };

  // Build HTML Markup
  const avatarHtml = `
    <div class="ngarsa-avatar-container" style="${assets.hideAvatar ? "display: none;" : ""}">
      <img class="ngarsa-avatar-img" src="${getEffectiveAvatar()}" alt="${copy.name} Avatar" />
      <span class="ngarsa-online-dot"></span>
    </div>
  `;

  const bubbleIconHtml = assets.bubbleIconUrl
    ? `<img class="ngarsa-bubble-img" src="${assets.bubbleIconUrl}" alt="${copy.name}" />`
    : WHATSAPP_ICON_SVG;

  const bgPatternStyle =
    !assets.hideBackgroundPattern && assets.backgroundPatternUrl
      ? `style="background-image: url('${assets.backgroundPatternUrl}');"`
      : "";

  root.insertAdjacentHTML(
    "beforeend",
    `
    <div class="ngarsa-panel" role="dialog" aria-modal="true" aria-label="${copy.name} Chat Panel">
      <div class="ngarsa-header">
        ${avatarHtml}
        <div class="ngarsa-header-meta">
          <div class="ngarsa-name">${copy.name}</div>
          <div class="ngarsa-status">${copy.statusText}</div>
        </div>
        <button type="button" class="ngarsa-close-btn" aria-label="${copy.closeButtonAriaLabel}">
          ${CLOSE_ICON_SVG}
        </button>
      </div>
      <div class="ngarsa-body">
        <div class="ngarsa-body-bg" ${bgPatternStyle}></div>
        <div class="ngarsa-bubble-msg">
          <span class="ngarsa-bubble-tail"></span>
          <div class="ngarsa-bubble-name">${copy.name}</div>
          <div class="ngarsa-bubble-text">${copy.welcomeText}</div>
          <div class="ngarsa-bubble-time">${formatCurrentTime()}</div>
        </div>
      </div>
      <div class="ngarsa-footer">
        <textarea
          class="ngarsa-input"
          placeholder="${copy.inputPlaceholder}"
          rows="1"
          aria-label="${copy.inputPlaceholder}"
        ></textarea>
        <button type="button" class="ngarsa-send-btn" aria-label="${copy.sendButtonAriaLabel}">
          ${SEND_ICON_SVG}
        </button>
      </div>
    </div>
    <button type="button" class="ngarsa-bubble" aria-label="${copy.openButtonAriaLabel}">
      ${bubbleIconHtml}
      <span class="ngarsa-bubble-badge" aria-hidden="true"></span>
    </button>
  `,
  );

  document.body.appendChild(root);

  // References
  const panel = root.querySelector(".ngarsa-panel") as HTMLElement;
  const bubble = root.querySelector(".ngarsa-bubble") as HTMLButtonElement;
  const closeBtn = root.querySelector(".ngarsa-close-btn") as HTMLButtonElement;
  const sendBtn = root.querySelector(".ngarsa-send-btn") as HTMLButtonElement;
  const textarea = root.querySelector(".ngarsa-input") as HTMLTextAreaElement;

  let openState = Boolean(currentOptions.defaultOpen);
  if (openState) {
    panel.classList.add("is-open");
  }

  const open = () => {
    if (openState) return;
    openState = true;
    panel.classList.add("is-open");
    textarea?.focus();
    currentOptions.onOpen?.();
  };

  const close = () => {
    if (!openState) return;
    openState = false;
    panel.classList.remove("is-open");
    bubble?.focus();
    currentOptions.onClose?.();
  };

  const toggle = () => {
    if (openState) {
      close();
    } else {
      open();
    }
  };

  const sanitizePhone = (phone: string): string => {
    return phone.replace(/[^\d]/g, "");
  };

  const sendMessage = () => {
    const rawText = textarea.value.trim();
    const cleanNumber = sanitizePhone(currentOptions.phoneNumber);
    const encodedText = encodeURIComponent(rawText);
    const url = `https://wa.me/${cleanNumber}${encodedText ? `?text=${encodedText}` : ""}`;

    currentOptions.onSend?.(rawText);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Event Listeners
  bubble.addEventListener("click", toggle);
  closeBtn.addEventListener("click", close);

  sendBtn.addEventListener("click", sendMessage);

  textarea.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    } else if (e.key === "Escape") {
      close();
    }
  });

  const handleGlobalKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && openState) {
      close();
    }
  };
  document.addEventListener("keydown", handleGlobalKeyDown);

  const destroy = () => {
    document.removeEventListener("keydown", handleGlobalKeyDown);
    root.remove();
  };

  const updateOptions = (newOptions: Partial<NgarsaWidgetOptions>) => {
    currentOptions = {
      ...currentOptions,
      ...newOptions,
      theme: { ...currentOptions.theme, ...newOptions.theme },
      copy: { ...currentOptions.copy, ...newOptions.copy },
      assets: { ...currentOptions.assets, ...newOptions.assets },
    };
    const updatedTheme = { ...DEFAULT_THEME, ...currentOptions.theme };
    styleEl.textContent = generateStyles(updatedTheme, id);

    const updatedCopy = { ...DEFAULT_COPY, ...currentOptions.copy };
    const updatedAssets = { ...DEFAULT_ASSETS, ...currentOptions.assets };

    const nameEl = root.querySelector(".ngarsa-name");
    const statusEl = root.querySelector(".ngarsa-status");
    const welcomeEl = root.querySelector(".ngarsa-bubble-text");
    const bubbleNameEl = root.querySelector(".ngarsa-bubble-name");
    const avatarImgEl = root.querySelector(".ngarsa-avatar-img") as HTMLImageElement | null;
    const avatarContainer = root.querySelector(".ngarsa-avatar-container") as HTMLElement | null;

    if (nameEl) nameEl.textContent = updatedCopy.name;
    if (bubbleNameEl) bubbleNameEl.textContent = updatedCopy.name;
    if (statusEl) statusEl.textContent = updatedCopy.statusText;
    if (welcomeEl) welcomeEl.textContent = updatedCopy.welcomeText;
    if (textarea) textarea.placeholder = updatedCopy.inputPlaceholder;

    // Refresh avatar
    if (avatarImgEl) {
      const activeAvatar = updatedAssets.avatarUrl || generateAvatar(updatedCopy.name, updatedTheme.primaryColor, updatedTheme.primaryTextColor);
      avatarImgEl.src = activeAvatar;
      avatarImgEl.alt = `${updatedCopy.name} Avatar`;
    }
    if (avatarContainer) {
      avatarContainer.style.display = updatedAssets.hideAvatar ? "none" : "";
    }

    // Refresh background pattern
    const bodyBg = root.querySelector(".ngarsa-body-bg") as HTMLElement | null;
    if (bodyBg) {
      if (!updatedAssets.hideBackgroundPattern && updatedAssets.backgroundPatternUrl) {
        bodyBg.style.backgroundImage = `url('${updatedAssets.backgroundPatternUrl}')`;
        bodyBg.style.display = "";
      } else {
        bodyBg.style.backgroundImage = "none";
        bodyBg.style.display = "none";
      }
    }

    // Refresh bubble icon
    if (bubble) {
      const activeBubbleIcon = updatedAssets.bubbleIconUrl
        ? `<img class="ngarsa-bubble-img" src="${updatedAssets.bubbleIconUrl}" alt="${updatedCopy.name}" />`
        : WHATSAPP_ICON_SVG;
      bubble.innerHTML = `
        ${activeBubbleIcon}
        <span class="ngarsa-bubble-badge" aria-hidden="true"></span>
      `;
      bubble.setAttribute("aria-label", updatedCopy.openButtonAriaLabel);
    }
  };

  return {
    open,
    close,
    toggle,
    isOpen: () => openState,
    destroy,
    updateOptions,
    getElement: () => root,
  };
}

export function init(
  options: NgarsaWidgetOptions,
): NgarsaWidgetInstance {
  return createNgarsaWidget(options);
}
