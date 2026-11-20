// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages. The two are independent: changing density never changes the chat font size.
export const DENSITIES = { compact: 0.85, regular: 1, roomy: 1.15 };

export function applySettings(settings, root = document.documentElement, body = document.body) {
  body.className = `density-${settings.density}`;
  root.style.setProperty("--chat-font-size", `${Math.round(settings.chatFontSize)}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
