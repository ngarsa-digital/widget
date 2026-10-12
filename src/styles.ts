/**
 * ngarsa-widget - Style Sheet Generator
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */

import { NgarsaTheme } from "./types";

export function generateStyles(theme: Required<NgarsaTheme>, id: string): string {
  const isLeft = theme.position === "bottom-left";

  return `
#${id} {
  --ngarsa-primary: ${theme.primaryColor};
  --ngarsa-primary-text: ${theme.primaryTextColor};
  --ngarsa-bubble-bg: ${theme.bubbleColor};
  --ngarsa-bubble-icon: ${theme.bubbleIconColor};
  --ngarsa-online-badge: ${theme.onlineBadgeColor};
  --ngarsa-bg: ${theme.backgroundColor};
  --ngarsa-chat-bg: ${theme.chatBubbleBackground};
  --ngarsa-chat-text: ${theme.chatBubbleTextColor};
  --ngarsa-font: ${theme.fontFamily};
  --ngarsa-zindex: ${theme.zIndex};
  --ngarsa-offset-bottom: ${theme.offsetBottom};
  --ngarsa-offset-side: ${theme.offsetSide};

  position: fixed;
  bottom: var(--ngarsa-offset-bottom);
  ${isLeft ? "left: var(--ngarsa-offset-side); right: auto;" : "right: var(--ngarsa-offset-side); left: auto;"}
  z-index: var(--ngarsa-zindex);
  font-family: var(--ngarsa-font);
  line-height: 1.4;
  box-sizing: border-box;
}

#${id} *, #${id} *::before, #${id} *::after {
  box-sizing: border-box;
}

#${id} .ngarsa-bubble {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--ngarsa-bubble-bg);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
  padding: 0;
  color: var(--ngarsa-bubble-icon);
  overflow: visible;
}

#${id} .ngarsa-bubble-img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

#${id} .ngarsa-bubble:hover {
  transform: scale(1.06);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 18px;
}

#${id} .ngarsa-bubble:focus-visible {
  outline: 2px solid var(--ngarsa-primary);
  outline-offset: 3px;
}

#${id} .ngarsa-bubble-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background-color: #ff3b30;
  border: 2px solid #ffffff;
  border-radius: 50%;
}

#${id} .ngarsa-panel {
  display: none;
  flex-direction: column;
  width: 360px;
  max-width: calc(100vw - 32px);
  background-color: var(--ngarsa-bg);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 12px 28px 0px;
  border-radius: 12px;
  overflow: hidden;
  position: absolute;
  bottom: 74px;
  ${isLeft ? "left: 0;" : "right: 0;"}
  transform-origin: ${isLeft ? "bottom left" : "bottom right"};
  animation: ngarsa-fade-in 0.25s ease-out forwards;
}

#${id} .ngarsa-panel.is-open {
  display: flex;
}

@keyframes ngarsa-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

#${id} .ngarsa-header {
  background: var(--ngarsa-primary);
  color: var(--ngarsa-primary-text);
  padding: 18px 16px;
  display: flex;
  align-items: center;
  position: relative;
}

#${id} .ngarsa-close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: var(--ngarsa-primary-text);
  opacity: 0.8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;
  transition: opacity 0.2s ease;
}

#${id} .ngarsa-close-btn:hover {
  opacity: 1;
}

#${id} .ngarsa-close-btn:focus-visible {
  outline: 2px solid #ffffff;
}

#${id} .ngarsa-avatar-container {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: visible;
  flex-shrink: 0;
  margin-right: 12px;
}

#${id} .ngarsa-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

#${id} .ngarsa-online-dot {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--ngarsa-online-badge);
  border: 2px solid var(--ngarsa-primary);
}

#${id} .ngarsa-header-meta {
  display: flex;
  flex-direction: column;
}

#${id} .ngarsa-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
}

#${id} .ngarsa-status {
  font-size: 13px;
  opacity: 0.88;
  margin-top: 2px;
}

#${id} .ngarsa-body {
  background-color: #e5ddd5;
  padding: 20px 16px;
  min-height: 180px;
  position: relative;
  overflow: hidden;
}

#${id} .ngarsa-body-bg {
  position: absolute;
  inset: 0;
  opacity: 0.12;
  pointer-events: none;
  background-repeat: repeat;
  background-size: 320px auto;
  background-position: center;
}

#${id} .ngarsa-bubble-msg {
  position: relative;
  z-index: 2;
  background-color: var(--ngarsa-chat-bg);
  color: var(--ngarsa-chat-text);
  padding: 8px 12px;
  border-radius: 0 8px 8px 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 2px;
  max-width: 86%;
  font-size: 14px;
  line-height: 1.35;
}

#${id} .ngarsa-bubble-tail {
  position: absolute;
  top: 0;
  left: -8px;
  width: 0;
  height: 0;
  border-top: 0 solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid var(--ngarsa-chat-bg);
}

#${id} .ngarsa-bubble-name {
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 2px;
}

#${id} .ngarsa-bubble-text {
  word-break: break-word;
}

#${id} .ngarsa-bubble-time {
  font-size: 11px;
  color: rgba(0, 0, 0, 0.45);
  text-align: right;
  margin-top: 4px;
}

#${id} .ngarsa-footer {
  padding: 10px 12px;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  gap: 8px;
}

#${id} .ngarsa-input {
  flex: 1;
  border: 1px solid #d1d7db;
  border-radius: 8px;
  padding: 10px 12px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.3;
  resize: none;
  height: 42px;
  outline: none;
  background: #ffffff;
  color: #111111;
  transition: border-color 0.2s ease;
}

#${id} .ngarsa-input:focus {
  border-color: var(--ngarsa-primary);
}

#${id} .ngarsa-send-btn {
  background: transparent;
  border: none;
  color: #54656f;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

#${id} .ngarsa-send-btn:hover {
  color: var(--ngarsa-primary);
}

#${id} .ngarsa-send-btn:focus-visible {
  outline: 2px solid var(--ngarsa-primary);
}

@media (max-width: 480px) {
  #${id} .ngarsa-panel {
    width: calc(100vw - 32px);
    ${isLeft ? "left: 0;" : "right: 0;"}
  }
}
`;
}
