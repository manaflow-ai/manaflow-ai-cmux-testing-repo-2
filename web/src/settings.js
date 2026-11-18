// Display settings. Density is how tight the chrome is (compact, regular, roomy). It is decoupled from the chat text
// size: changing density never changes the font size of messages.
export const DENSITIES = { compact: 0.85, regular: 1, roomy: 1.15 };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  body.className = `density-${settings.density}`;
  // The chat text size is independent of density.
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
