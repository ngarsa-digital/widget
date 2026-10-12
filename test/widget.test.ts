import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createNgarsaWidget } from "../src/index";

describe("NgarsaWidget", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should mount widget to document.body with default options", () => {
    const widget = createNgarsaWidget({ phoneNumber: "628123456789" });
    const el = widget.getElement();

    expect(el).not.toBeNull();
    expect(document.body.contains(el)).toBe(true);

    const name = el?.querySelector(".ngarsa-name")?.textContent;
    expect(name).toBe("Ngarsa Official");

    const status = el?.querySelector(".ngarsa-status")?.textContent;
    expect(status).toBe("Typically replies within a day");

    const welcome = el?.querySelector(".ngarsa-bubble-text")?.textContent;
    expect(welcome).toContain("Hi there");

    widget.destroy();
    expect(document.body.contains(el)).toBe(false);
  });

  it("should apply customized copy and theme correctly", () => {
    const widget = createNgarsaWidget({
      phoneNumber: "628123456789",
      copy: {
        name: "Acme Support",
        statusText: "Online 24/7",
        welcomeText: "How can Acme assist you today?",
        inputPlaceholder: "Ask Acme...",
      },
      theme: {
        primaryColor: "#ff5500",
        position: "bottom-left",
      },
    });

    const el = widget.getElement();
    expect(el?.querySelector(".ngarsa-name")?.textContent).toBe("Acme Support");
    expect(el?.querySelector(".ngarsa-status")?.textContent).toBe("Online 24/7");
    expect(el?.querySelector(".ngarsa-bubble-text")?.textContent).toBe("How can Acme assist you today?");

    const textarea = el?.querySelector(".ngarsa-input") as HTMLTextAreaElement;
    expect(textarea.placeholder).toBe("Ask Acme...");

    const style = el?.querySelector("style")?.textContent;
    expect(style).toContain("#ff5500");
    expect(style).toContain("left: var(--ngarsa-offset-side)");

    widget.destroy();
  });

  it("should open, close, and toggle chat panel", () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();

    const widget = createNgarsaWidget({
      phoneNumber: "628123456789",
      onOpen,
      onClose,
    });

    const el = widget.getElement();
    const panel = el?.querySelector(".ngarsa-panel");
    const bubble = el?.querySelector(".ngarsa-bubble") as HTMLButtonElement;
    const closeBtn = el?.querySelector(".ngarsa-close-btn") as HTMLButtonElement;

    expect(widget.isOpen()).toBe(false);
    expect(panel?.classList.contains("is-open")).toBe(false);

    // Click bubble to open
    bubble.click();
    expect(widget.isOpen()).toBe(true);
    expect(panel?.classList.contains("is-open")).toBe(true);
    expect(onOpen).toHaveBeenCalledTimes(1);

    // Click close button
    closeBtn.click();
    expect(widget.isOpen()).toBe(false);
    expect(panel?.classList.contains("is-open")).toBe(false);
    expect(onClose).toHaveBeenCalledTimes(1);

    // Toggle
    widget.toggle();
    expect(widget.isOpen()).toBe(true);
    widget.toggle();
    expect(widget.isOpen()).toBe(false);

    widget.destroy();
  });

  it("should send whatsapp message with formatted URL and phone sanitization", () => {
    const onSend = vi.fn();
    const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    const widget = createNgarsaWidget({
      phoneNumber: "+62 812-3456-7890",
      onSend,
    });

    const el = widget.getElement();
    const textarea = el?.querySelector(".ngarsa-input") as HTMLTextAreaElement;
    const sendBtn = el?.querySelector(".ngarsa-send-btn") as HTMLButtonElement;

    textarea.value = "Hello Ngarsa!";
    sendBtn.click();

    expect(onSend).toHaveBeenCalledWith("Hello Ngarsa!");
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://wa.me/6281234567890?text=Hello%20Ngarsa!",
      "_blank",
      "noopener,noreferrer"
    );

    windowOpenSpy.mockRestore();
    widget.destroy();
  });

  it("should close on Escape key", () => {
    const widget = createNgarsaWidget({
      phoneNumber: "628123456789",
      defaultOpen: true,
    });

    expect(widget.isOpen()).toBe(true);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    expect(widget.isOpen()).toBe(false);

    widget.destroy();
  });

  it("should dynamically update options via updateOptions()", () => {
    const widget = createNgarsaWidget({
      phoneNumber: "628123456789",
      copy: { name: "Original Name" },
    });

    const el = widget.getElement();
    expect(el?.querySelector(".ngarsa-name")?.textContent).toBe("Original Name");

    widget.updateOptions({
      copy: { name: "Updated Name" },
    });

    expect(el?.querySelector(".ngarsa-name")?.textContent).toBe("Updated Name");
    widget.destroy();
  });

  it("should generate SVG avatar by default and update when name or avatarUrl changes", () => {
    const widget = createNgarsaWidget({
      phoneNumber: "628123456789",
      copy: { name: "John Doe" },
    });

    const el = widget.getElement();
    const avatarImg = el?.querySelector(".ngarsa-avatar-img") as HTMLImageElement;
    expect(avatarImg).not.toBeNull();
    expect(avatarImg.src).toContain("data:image/svg+xml");
    // Should have initials JD in SVG data URI
    expect(decodeURIComponent(avatarImg.src)).toContain("JD");

    // Update with custom avatar URL
    widget.updateOptions({
      assets: { avatarUrl: "https://example.com/avatar.jpg" },
    });
    expect(avatarImg.src).toBe("https://example.com/avatar.jpg");

    // Update with bubble icon
    widget.updateOptions({
      assets: { bubbleIconUrl: "https://example.com/logo.png" },
    });
    const bubbleImg = el?.querySelector(".ngarsa-bubble-img") as HTMLImageElement;
    expect(bubbleImg).not.toBeNull();
    expect(bubbleImg.src).toBe("https://example.com/logo.png");

    widget.destroy();
  });
});
