// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages.
export const DENSITIES = { compact: 0.85, regular: 1, roomy: 1.15 };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  const scale = DENSITIES[settings.density] ?? 1;
  body.className = `density-${settings.density}`;
  // The chat text size follows the density.
  root.style.setProperty("--chat-font-size", `${Math.round(settings.chatFontSize * scale)}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
