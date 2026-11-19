// Display settings. Density is how tight the chrome is (compact, regular, roomy) and never changes the chat text size,
// which is set only by chatFontSize.
export const DENSITIES = { compact: 0.85, regular: 1, roomy: 1.15 };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  body.className = `density-${settings.density}`;
  // The chat text size is independent of the density: changing density never changes message font size.
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
