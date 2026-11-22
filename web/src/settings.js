// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages.
// Density only affects chrome spacing (see styles/density.css), never the chat text size.
export const DENSITIES = { compact: "compact", regular: "regular", roomy: "roomy" };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  body.className = `density-${settings.density in DENSITIES ? settings.density : "regular"}`;
  // The chat text size is independent of density: density never changes message font size.
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
