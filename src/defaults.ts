import { NgarsaAssets, NgarsaCopy, NgarsaTheme } from "./types";
import { DEFAULT_AVATAR_DATA_URI, DEFAULT_PATTERN_DATA_URI } from "./icons";

export const DEFAULT_THEME: Required<NgarsaTheme> = {
  primaryColor: "#095e54",
  primaryTextColor: "#ffffff",
  bubbleColor: "#ffffff",
  bubbleIconColor: "#4fce5d",
  onlineBadgeColor: "#4ad504",
  backgroundColor: "#ffffff",
  chatBubbleBackground: "#ffffff",
  chatBubbleTextColor: "#111111",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  zIndex: 999999,
  position: "bottom-right",
  offsetBottom: "20px",
  offsetSide: "20px",
};

export const DEFAULT_COPY: Required<NgarsaCopy> = {
  name: "Ngarsa Official",
  statusText: "Typically replies within a day",
  welcomeText: "Hi there 👋, how can we help you?",
  inputPlaceholder: "Type a message...",
  sendButtonAriaLabel: "Send message to WhatsApp",
  closeButtonAriaLabel: "Close WhatsApp chat widget",
  openButtonAriaLabel: "Open WhatsApp chat",
};

export const DEFAULT_ASSETS: Required<NgarsaAssets> = {
  avatarUrl: "", // When empty, dynamically generated based on name & brand color
  hideAvatar: false,
  bubbleIconUrl: "", // When empty, uses WHATSAPP_ICON_SVG
  backgroundPatternUrl: DEFAULT_PATTERN_DATA_URI,
  hideBackgroundPattern: false,
};
