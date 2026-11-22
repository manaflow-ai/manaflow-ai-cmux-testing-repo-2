// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages. The two are independent: density never changes the chat text size.
export const DENSITIES = ["compact", "regular", "roomy"];

export function applySettings(settings, root = document.documentElement, body = document.body) {
  const density = DENSITIES.includes(settings.density) ? settings.density : "regular";
  body.className = `density-${density}`;
  // The chat text size is the user's setting as is, at every density.
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
