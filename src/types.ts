/**
 * ngarsa-widget - Type Definitions
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */

export interface NgarsaTheme {
  primaryColor?: string;
  primaryTextColor?: string;
  bubbleColor?: string;
  bubbleIconColor?: string;
  onlineBadgeColor?: string;
  backgroundColor?: string;
  chatBubbleBackground?: string;
  chatBubbleTextColor?: string;
  fontFamily?: string;
  zIndex?: number;
  position?: "bottom-right" | "bottom-left";
  offsetBottom?: string;
  offsetSide?: string;
}

export interface NgarsaCopy {
  name?: string;
  statusText?: string;
  welcomeText?: string;
  inputPlaceholder?: string;
  sendButtonAriaLabel?: string;
  closeButtonAriaLabel?: string;
  openButtonAriaLabel?: string;
}

export interface NgarsaAssets {
  avatarUrl?: string;
  hideAvatar?: boolean;
  bubbleIconUrl?: string;
  backgroundPatternUrl?: string;
  hideBackgroundPattern?: boolean;
}

export interface NgarsaWidgetOptions {
  phoneNumber: string;
  theme?: NgarsaTheme;
  copy?: NgarsaCopy;
  assets?: NgarsaAssets;
  defaultOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onSend?: (message: string) => void;
}

export interface NgarsaWidgetInstance {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: () => boolean;
  destroy: () => void;
  updateOptions: (newOptions: Partial<NgarsaWidgetOptions>) => void;
  getElement: () => HTMLElement | null;
}
