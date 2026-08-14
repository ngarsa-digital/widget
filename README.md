# ngarsa-widget

A repository of lightweight, drop-in widgets created by [Ngarsa](https://github.com/ngarsa-digital).

## Widgets

| Widget | Description | Status |
|--------|-------------|--------|
| whatsapp-widget | Floating WhatsApp deep-link button for any website | ✅ Stable |

---

## whatsapp-widget

A self-contained, zero-dependency floating WhatsApp chat button that overlays on any page. Clicking it opens a prefilled WhatsApp conversation with a configurable phone number.

### Features

- 💬 **One-click WhatsApp contact** — opens `wa.me/<number>` with an optional prefilled message
- 🪟 **Slide-in panel** — mimics the native WhatsApp chat look (header, message bubble, input, send)
- 📱 **Responsive** — adapts to mobile widths (≤ 375 px)
- 🎨 **No build step** — pure HTML/CSS/JS, drop the folder anywhere and embed a `<script>`
- ⚡ **Lean footprint** — ~50 KB of code (the rest is the avatar image and one webfont for the close icon)

### Quick start

**1. Clone or copy the `widget/` folder into your project.**

**2. Configure your WhatsApp number.** Pass the phone number as a URL parameter on the iframe `src`. The widget reads these query-string parameters:

| Parameter           | Default           | Description                                            |
|---------------------|-------------------|--------------------------------------------------------|
| `phone_number`      | `62810000000`     | WhatsApp number (international, no `+`, no leading `0`) |
| `whatsapp_name`     | `Ngarsa Official` | Display name shown in the chat header                   |
| `whatsapp_text`     | *(empty)*         | Overrides the welcome message text inside the bubble    |

```html
<iframe src="https://widget.ngarsa.com/?phone_number=628123456789&whatsapp_name=My+Business&whatsapp_text=Hello%21"
        style="position: fixed; bottom: 20px; right: 20px; border: none; height: 100%; width: 100%; z-index: 9999;" aria-hidden="true"></iframe>
```

> 💡 When `whatsapp_name` is supplied, the avatar image in the header is hidden to keep the header clean — useful if you want a text-only header.

**3. Embed it.** Add this to your page (just before `</body>`):

```html
<!-- Ngarsa WhatsApp widget -->
<script src="https://widget.ngarsa.com/" defer></script>
```

> ⚠️ Because the widget markup lives inside `index.html`, the easiest embedding is via an `<iframe>`. Note that the widget itself uses `position: fixed`, so the iframe just needs to exist — width/height don't matter:
>
> ```html
> <iframe src="https://widget.ngarsa.com/"
>         style="position: fixed; bottom: 20px; right: 20px; border: none; height: 100%; width: 100%; z-index: 9999" aria-hidden="true"></iframe>
> ```
>
> For tighter integration (single DOM, no iframe overhead), copy the `<div class="wrapper-floating">…</div>` block from `index.html` directly into your page and load `assets/css/styles.css` + `assets/js/widget.js` alongside it.

### Project structure

```
widget/
├── index.html                              # Widget markup
└── assets/
    ├── js/
    │   └── widget.js                       # Open/close + WhatsApp deep-link
    ├── css/
    │   ├── styles.css                      # Widget styles + entrance animation
    │   └── font-awesome.css                # FontAwesome 4.6.3 (fa-times-circle icon)
    ├── fonts/                              # OpenSans-Regular + FontAwesome webfonts
    └── images/
        ├── favicon.png                     # Header avatar
        └── whatsapp-back.png               # Chat pattern background
```

### Customization

| Want to change… | Where |
| ------------------ | ------- |
| Phone number | iframe `src` → `?phone_number=…` |
| Header / display name | iframe `src` → `?whatsapp_name=…` |
| Welcome bubble message | iframe `src` → `?whatsapp_text=…` |
| Header / avatar | `assets/css/styles.css` → `.floating-fto` `background-image` + `assets/images/favicon.png` |
| Header color (default teal-green gradient) | `assets/css/styles.css` → `.floating-header-comp` `background` |
| Bubble color (default WhatsApp green, `#4FCE5D`) | `index.html` → `fill` attribute on the WhatsApp icon `<svg>` |
| Font | `assets/css/styles.css` → `@font-face` + `font-family` declarations |
| Entrance animation | `assets/css/styles.css` → `@keyframes fadeInRight` |

### Browser support

Modern evergreen browsers (Chrome, Firefox, Edge, Safari). Uses CSS `transform`, `transition`, and `@keyframes` — no transpilation required.

### Roadmap

- 🤖 **AI chat mode** — *in progress* — optional OpenAI-powered assistant inside the panel, with API key stored in `localStorage` (user-supplied)
- 🔌 **Provider adapters** — Gemini / Claude support behind the same settings UI
- 🪶 **Inline SVG icon set** — replace FontAwesome webfont with inline SVGs to drop ~765 KB

---

## License

MIT — see individual widget folders for any additional notices.

## Contributing

Issues and PRs welcome. Keep widgets dependency-free and zero-build.
