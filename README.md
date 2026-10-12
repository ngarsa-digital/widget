# ngarsa-widget

A lightweight, zero-dependency, fully customizable floating WhatsApp chat widget for modern web applications and websites. Written in TypeScript and ready for Bun, Node.js (npm, pnpm, yarn), frontend frameworks (React, Next.js, Vue, Nuxt, Svelte, Astro), and vanilla HTML script tags.

[![npm version](https://img.shields.io/npm/v/ngarsa-widget.svg)](https://www.npmjs.com/package/ngarsa-widget)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-~14%20KB-success.svg)](https://unpkg.com/ngarsa-widget/dist/index.global.js)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg)](https://www.typescriptlang.org/)

---

## Features

- ⚡ **Zero External Dependencies**: Self-contained inline SVGs and CSS isolation (~14 KB minified).
- 🎨 **Dynamic Avatar Generator**: Automatically generates high-contrast SVG avatars with initials based on brand color and business name.
- 💬 **Flexible Trigger Icons**: Use the official WhatsApp vector icon or sync with your brand avatar / logo image.
- ♿ **Accessible by Design**: WCAG compliant with keyboard navigation (<kbd>Escape</kbd> to close, <kbd>Enter</kbd> to send), focus trap, and ARIA labels.
- 📦 **Universal Module Formats**: ESM (`import`), CommonJS (`require`), TypeScript types (`.d.ts`), and browser IIFE (`<script>`).
- 🔄 **Hot Reconfiguration**: Update theme, copy, position, or assets on the fly via `.updateOptions()` without re-mounting.

---

## Quickstart

### Installation

Choose your preferred package manager:

```bash
# Bun
bun add ngarsa-widget

# npm
npm install ngarsa-widget

# pnpm
pnpm add ngarsa-widget

# yarn
yarn add ngarsa-widget
```

---

## Implementation Examples

### 1. Vanilla JavaScript / TypeScript

```typescript
import { createNgarsaWidget } from "ngarsa-widget";

const widget = createNgarsaWidget({
  phoneNumber: "6281234567890", // International format without '+'
  copy: {
    name: "Customer Support",
    statusText: "Typically replies in minutes",
    welcomeText: "Hi there! How can we help you today?",
    inputPlaceholder: "Type your message..."
  },
  theme: {
    primaryColor: "#01472e", // Forest green
    position: "bottom-right"
  }
});

// Programmatic controls:
// widget.open();
// widget.close();
// widget.toggle();
// widget.updateOptions({ copy: { name: "Live Support" } });
// widget.destroy();
```

---

### 2. React / Next.js (App Router & Pages Router)

```tsx
"use client";

import { useEffect } from "react";
import { createNgarsaWidget } from "ngarsa-widget";

export default function WhatsAppButton() {
  useEffect(() => {
    const widget = createNgarsaWidget({
      phoneNumber: "6281234567890",
      copy: {
        name: "Acme Support",
        welcomeText: "Welcome to Acme! Need any assistance?"
      },
      theme: {
        primaryColor: "#01472e",
        position: "bottom-right"
      }
    });

    // Clean up when unmounting
    return () => {
      widget.destroy();
    };
  }, []);

  return null;
}
```

---

### 3. Vue 3 / Nuxt 3

```vue
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { createNgarsaWidget, type NgarsaWidgetInstance } from "ngarsa-widget";

let widget: NgarsaWidgetInstance | null = null;

onMounted(() => {
  widget = createNgarsaWidget({
    phoneNumber: "6281234567890",
    copy: {
      name: "Support Desk",
      welcomeText: "How can our engineers help you today?"
    },
    theme: {
      primaryColor: "#01472e"
    }
  });
});

onUnmounted(() => {
  if (widget) {
    widget.destroy();
  }
});
</script>

<template>
  <!-- Widget mounts automatically to document.body -->
</template>
```

---

### 4. Svelte / SvelteKit

```svelte
<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { createNgarsaWidget, type NgarsaWidgetInstance } from "ngarsa-widget";

  let widget: NgarsaWidgetInstance;

  onMount(() => {
    widget = createNgarsaWidget({
      phoneNumber: "6281234567890",
      theme: { primaryColor: "#01472e" }
    });
  });

  onDestroy(() => {
    widget?.destroy();
  });
</script>
```

---

### 5. Plain HTML / Static Websites (CDN Script Tag)

Add the script before the closing `</body>` tag:

```html
<script src="https://unpkg.com/ngarsa-widget/dist/index.global.js"></script>
<script>
  const widget = NgarsaWidget.createNgarsaWidget({
    phoneNumber: "6281234567890",
    copy: {
      name: "Ngarsa Official",
      welcomeText: "Hi there! How can we help you?"
    },
    theme: {
      primaryColor: "#01472e"
    }
  });
</script>
```

#### Automatic Mounting via Script Data Attributes:

```html
<script
  src="https://unpkg.com/ngarsa-widget/dist/index.global.js"
  data-phone="6281234567890"
  data-name="Ngarsa Support"
  data-text="Hello! How can we help?"
  data-color="#01472e"
  defer
></script>
```

---

## Dynamic Avatar Generator

`ngarsa-widget` includes a built-in SVG avatar generator that extracts initials and creates an optimized SVG data URI matching your primary brand color:

```typescript
import { generateAvatar } from "ngarsa-widget";

// Returns data:image/svg+xml;base64,... with "JD" initials on #01472e background
const avatarUri = generateAvatar("John Doe", "#01472e", "#fefae0");
```

---

## API Reference

### `NgarsaWidgetOptions`

| Property | Type | Default | Description |
|---|---|---|---|
| `phoneNumber` | `string` | *(Required)* | Destination WhatsApp number (international digits, e.g. `"6281234567890"`). |
| `theme` | `NgarsaTheme` | *(See below)* | Colors, font family, z-index, and screen placement. |
| `copy` | `NgarsaCopy` | *(See below)* | Titles, greetings, placeholders, and ARIA accessibility labels. |
| `assets` | `NgarsaAssets` | *(See below)* | Custom avatar image, bubble trigger logo, or background pattern. |
| `defaultOpen` | `boolean` | `false` | When `true`, automatically opens the chat panel upon initial render. |
| `onOpen` | `() => void` | `undefined` | Callback fired when the chat window opens. |
| `onClose` | `() => void` | `undefined` | Callback fired when the chat window closes. |
| `onSend` | `(message: string) => void` | `undefined` | Callback fired when user clicks send or presses Enter. |

---

### `NgarsaTheme`

```typescript
interface NgarsaTheme {
  primaryColor?: string;          // Default: "#095e54"
  primaryTextColor?: string;      // Default: "#ffffff"
  bubbleColor?: string;           // Default: "#ffffff"
  bubbleIconColor?: string;       // Default: "#4fce5d"
  onlineBadgeColor?: string;      // Default: "#4ad504"
  backgroundColor?: string;       // Default: "#ffffff"
  chatBubbleBackground?: string;  // Default: "#ffffff"
  chatBubbleTextColor?: string;   // Default: "#111111"
  fontFamily?: string;            // System font stack
  zIndex?: number;                // Default: 999999
  position?: "bottom-right" | "bottom-left"; // Default: "bottom-right"
  offsetBottom?: string;          // Default: "20px"
  offsetSide?: string;            // Default: "20px"
}
```

---

### `NgarsaCopy`

```typescript
interface NgarsaCopy {
  name?: string;                 // Default: "Ngarsa Official"
  statusText?: string;           // Default: "Typically replies within a day"
  welcomeText?: string;          // Default: "Hi there 👋, how can we help you?"
  inputPlaceholder?: string;     // Default: "Type a message..."
  sendButtonAriaLabel?: string;  // Default: "Send message to WhatsApp"
  closeButtonAriaLabel?: string; // Default: "Close WhatsApp chat widget"
  openButtonAriaLabel?: string;  // Default: "Open WhatsApp chat"
}
```

---

### `NgarsaAssets`

```typescript
interface NgarsaAssets {
  avatarUrl?: string;             // Custom URL, or leave blank to auto-generate
  hideAvatar?: boolean;          // Default: false
  bubbleIconUrl?: string;        // Custom toggle trigger icon URL (default: WhatsApp SVG)
  backgroundPatternUrl?: string; // Custom chat body pattern URL (default: subtle SVG pattern)
  hideBackgroundPattern?: boolean; // Default: false
}
```

---

### `NgarsaWidgetInstance` Methods

```typescript
const widget = createNgarsaWidget({ phoneNumber: "6281234567890" });

widget.open();                          // Open chat panel
widget.close();                         // Close chat panel
widget.toggle();                        // Toggle open/close state
widget.isOpen();                        // Returns boolean
widget.updateOptions({ copy: { ... } }); // Reconfigure options without unmounting
widget.getElement();                    // Returns widget root HTMLElement
widget.destroy();                       // Removes event listeners & DOM elements
```

---

## Local Development & Showcase

To run the interactive Forest & Sage demo showcase:

```bash
# 1. Install dependencies
pnpm install # or bun install

# 2. Run unit tests
pnpm test

# 3. Build package distributions
pnpm run build

# 4. Launch demo playground
pnpm run demo
# Then visit: http://localhost:3000
```

---

## Authors & Maintainers

- **[Ngarsa](https://ngarsa.com/)** — Studio & Digital Craft
- **[Risyandi](https://risyandi.com/)** — Engineering & Software Architecture

---

## License

[MIT](LICENSE) © 2026 Ngarsa
