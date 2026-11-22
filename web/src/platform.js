// The platform bridge (stub for the browser).

// Keychain items the app must never ask for: the browser engine's own key would let the app decrypt the cookies and
// saved passwords of Chromium browsers, so a request for it is refused here, before any system prompt is shown.
const BLOCKED_SERVICES = new Set(["Chromium Safe Storage"]);

export const keychain = {
  async requestAccess(service) {
    if (BLOCKED_SERVICES.has(String(service).trim())) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
