/**
 * ngarsa-widget - Dynamic SVG Avatar Generator
 * Generates an accessible, lightweight SVG Data URI avatar based on a name or brand.
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */
export function generateAvatar(
  name: string = "Ngarsa",
  bgColor: string = "#01472e",
  textColor: string = "#fefae0",
): string {
  const cleanName = (name || "").trim();
  const words = cleanName.split(/\s+/).filter(Boolean);
  let initials = "N";

  if (words.length >= 2) {
    initials = (words[0][0] + words[1][0]).toUpperCase();
  } else if (words.length === 1 && words[0].length > 0) {
    initials = words[0].substring(0, Math.min(2, words[0].length)).toUpperCase();
  }

  const safeBg = bgColor.startsWith("#") ? bgColor : `#${bgColor}`;
  const safeText = textColor.startsWith("#") ? textColor : `#${textColor}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="${safeBg}"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="${safeText}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="1">${initials}</text></svg>`;

  if (typeof btoa === "function") {
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
  }

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
