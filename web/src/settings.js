// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages.
export const DENSITIES = { compact: 0.85, regular: 1, roomy: 1.15 };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  // Density only changes the chrome (spacing, heights). It never changes the chat text size, which comes from
  // chatFontSize alone.
  const density = settings.density in DENSITIES ? settings.density : "regular";
  body.className = `density-${density}`;
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
