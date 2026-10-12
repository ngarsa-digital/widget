import { createNgarsaWidget, init } from "./widget";
export * from "./types";
export * from "./defaults";
export * from "./avatar";
export { createNgarsaWidget, init };

// Auto-mount if script is loaded via CDN with data attributes on <script>
if (typeof window !== "undefined" && typeof document !== "undefined") {
  const currentScript = document.currentScript as HTMLScriptElement | null;
  if (currentScript && currentScript.dataset.phone) {
    init({
      phoneNumber: currentScript.dataset.phone,
      copy: {
        name: currentScript.dataset.name,
        welcomeText: currentScript.dataset.text,
      },
      theme: {
        primaryColor: currentScript.dataset.color,
      },
    });
  }
}
