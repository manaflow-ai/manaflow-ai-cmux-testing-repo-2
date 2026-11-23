// Display settings. Density is how tight the chrome is (compact, regular, roomy); the chat text size is the size of
// the messages. The two are independent: density only changes spacing (via the .density-* classes in
// styles/density.css) and never touches the chat text size.
export const DENSITIES = ["compact", "regular", "roomy"];

export function applySettings(settings, root = document.documentElement, body = document.body) {
  const density = DENSITIES.includes(settings.density) ? settings.density : "regular";
  for (const name of DENSITIES) body.classList.remove(`density-${name}`);
  body.classList.add(`density-${density}`);
  // The chat text size is exactly what the user chose, whatever the density.
  root.style.setProperty("--chat-font-size", `${settings.chatFontSize}px`);
}

applySettings({ density: "regular", chatFontSize: 14 });
