// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages. The two are independent: density changes spacing only, never the message font size.
export const DENSITIES = { compact: 0.85, regular: 1, roomy: 1.15 };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  const density = settings.density in DENSITIES ? settings.density : "regular";
  body.className = `density-${density}`;
  // The chat text size is its own setting: density never changes it.
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
