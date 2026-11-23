// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages.
export const DENSITIES = { compact: 0.85, regular: 1, roomy: 1.15 };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  body.className = `density-${settings.density}`;
  // The chat text size is independent of density: density only changes spacing, never message font size.
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
