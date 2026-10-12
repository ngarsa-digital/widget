interface NgarsaTheme {
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
interface NgarsaCopy {
    name?: string;
    statusText?: string;
    welcomeText?: string;
    inputPlaceholder?: string;
    sendButtonAriaLabel?: string;
    closeButtonAriaLabel?: string;
    openButtonAriaLabel?: string;
}
interface NgarsaAssets {
    avatarUrl?: string;
    hideAvatar?: boolean;
    bubbleIconUrl?: string;
    backgroundPatternUrl?: string;
    hideBackgroundPattern?: boolean;
}
interface NgarsaWidgetOptions {
    phoneNumber: string;
    theme?: NgarsaTheme;
    copy?: NgarsaCopy;
    assets?: NgarsaAssets;
    defaultOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    onSend?: (message: string) => void;
}
interface NgarsaWidgetInstance {
    open: () => void;
    close: () => void;
    toggle: () => void;
    isOpen: () => boolean;
    destroy: () => void;
    updateOptions: (newOptions: Partial<NgarsaWidgetOptions>) => void;
    getElement: () => HTMLElement | null;
}

declare function createNgarsaWidget(options: NgarsaWidgetOptions): NgarsaWidgetInstance;
declare function init(options: NgarsaWidgetOptions): NgarsaWidgetInstance;

declare const DEFAULT_THEME: Required<NgarsaTheme>;
declare const DEFAULT_COPY: Required<NgarsaCopy>;
declare const DEFAULT_ASSETS: Required<NgarsaAssets>;

/**
 * Generates an accessible, lightweight SVG Data URI avatar based on a name or brand.
 * Uses high-contrast initials and a solid background color.
 */
declare function generateAvatar(name?: string, bgColor?: string, textColor?: string): string;

export { DEFAULT_ASSETS, DEFAULT_COPY, DEFAULT_THEME, type NgarsaAssets, type NgarsaCopy, type NgarsaTheme, type NgarsaWidgetInstance, type NgarsaWidgetOptions, createNgarsaWidget, generateAvatar, init };
