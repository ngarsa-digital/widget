# ngarsa-widget

A lightweight, zero-dependency, customizable floating WhatsApp chat widget for websites and web applications. Written in TypeScript and published for Bun, npm, yarn, pnpm, and browser script tags.

[![npm version](https://img.shields.io/npm/v/ngarsa-widget.svg)](https://www.npmjs.com/package/ngarsa-widget)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Highlights

- ⚡ **Ultra-lightweight** (~13 KB minified bundle, 0 external dependencies)
- 🎨 **Easy customization** for colors, branding, copy, assets, and positioning
- 🔒 **Accessible** with full keyboard navigation (Escape to close, Enter to send) and ARIA attributes
- 📦 **Multi-format support**: ESM (`import`), CommonJS (`require`), TypeScript types (`.d.ts`), and browser IIFE (`<script>`)

---

## Installation

### Using Bun
```bash
bun add ngarsa-widget
```

### Using npm
```bash
npm install ngarsa-widget
```

### Using pnpm / yarn
```bash
pnpm add ngarsa-widget
# or
yarn add ngarsa-widget
```

---

## Usage

### 1. Modern Frameworks / Bundlers (React, Vue, Next.js, Vite, Astro, Svelte)

```typescript
import { createNgarsaWidget } from "ngarsa-widget";

const widget = createNgarsaWidget({
  phoneNumber: "628123456789", // International format without '+'
  copy: {
    name: "Customer Support",
    statusText: "Typically replies within a few minutes",
    welcomeText: "Hello! How can our team help you today?",
    inputPlaceholder: "Write a message...",
  },
  theme: {
    primaryColor: "#095e54",
    position: "bottom-right",
  },
});

// Programmatic controls:
// widget.open();
// widget.close();
// widget.toggle();
// widget.destroy();
```

### 2. Plain HTML / CDN Script Tag

```html
<script src="https://unpkg.com/ngarsa-widget/dist/index.global.js"></script>
<script>
  const widget = NgarsaWidget.createNgarsaWidget({
    phoneNumber: "628123456789",
    copy: {
      name: "Ngarsa Official",
      welcomeText: "Hi there 👋, how can we help you?"
    }
  });
</script>
```

Or automatic initialization via script attributes:
```html
<script
  src="https://unpkg.com/ngarsa-widget/dist/index.global.js"
  data-phone="628123456789"
  data-name="My Business"
  data-text="Hi there! Need help?"
  data-color="#095e54"
  defer
></script>
```

---

## Configuration API

### `NgarsaWidgetOptions`

| Option | Type | Default | Description |
|---|---|---|---|
| `phoneNumber` | `string` | *(Required)* | Target WhatsApp phone number. |
| `copy` | `NgarsaCopy` | Defaults below | Custom text, headers, and placeholders. |
| `theme` | `NgarsaTheme` | Defaults below | Custom colors, fonts, z-index, and placement. |
| `assets` | `NgarsaAssets` | Built-in SVGs | Avatar image and pattern backgrounds. |
| `defaultOpen` | `boolean` | `false` | Whether to mount in open state. |
| `onOpen` | `() => void` | `undefined` | Callback when panel opens. |
| `onClose` | `() => void` | `undefined` | Callback when panel closes. |
| `onSend` | `(msg: string) => void` | `undefined` | Callback when user triggers send. |

### `NgarsaCopy` (Default Copywriting)

```typescript
{
  name: "Ngarsa Official",
  statusText: "Typically replies within a day",
  welcomeText: "Hi there 👋, how can we help you?",
  inputPlaceholder: "Type a message...",
  sendButtonAriaLabel: "Send message to WhatsApp",
  closeButtonAriaLabel: "Close WhatsApp chat widget",
  openButtonAriaLabel: "Open WhatsApp chat"
}
```

### `NgarsaTheme` (Default Colors & Positioning)

```typescript
{
  primaryColor: "#095e54",
  primaryTextColor: "#ffffff",
  bubbleColor: "#ffffff",
  bubbleIconColor: "#4fce5d",
  onlineBadgeColor: "#4ad504",
  backgroundColor: "#ffffff",
  chatBubbleBackground: "#ffffff",
  chatBubbleTextColor: "#111111",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  zIndex: 999999,
  position: "bottom-right", // or "bottom-left"
  offsetBottom: "20px",
  offsetSide: "20px"
}
```

### `NgarsaAssets`

```typescript
{
  avatarUrl: "<built-in SVG avatar>",
  hideAvatar: false,
  backgroundPatternUrl: "<built-in SVG pattern>",
  hideBackgroundPattern: false
}
```

---

## Development & Testing

```bash
# Install dependencies
bun install

# Run the interactive demo page
bun run demo
# Then visit: http://localhost:3000

# Run unit tests
bun run test

# Type check
bun run typecheck

# Build library bundles
bun run build
```

---

## License

MIT © [Ngarsa](https://github.com/ngarsa-digital)
