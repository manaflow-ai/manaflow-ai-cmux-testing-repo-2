// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages. They are independent: changing the density never changes the chat font size.
export const DENSITIES = { compact: 0.85, regular: 1, roomy: 1.15 };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  const density = DENSITIES[settings.density] === undefined ? "regular" : settings.density;
  body.className = `density-${density}`;
  // The chat text size is its own setting: density does not scale it.
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
