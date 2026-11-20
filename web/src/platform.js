// The platform bridge (stub for the browser).

// Keychain items this app must never ask the system for. Asking for "Chromium Safe Storage" shows a
// keychain prompt to the user, so every request for it is refused here, before it reaches the system.
const BLOCKED_KEYCHAIN_ITEMS = new Set(["Chromium Safe Storage"]);

export const keychain = {
  async requestAccess(service) {
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    if (BLOCKED_KEYCHAIN_ITEMS.has(service)) {
      console.warn("keychain access refused (blocked item):", service);
      return undefined;
    }
    console.log("keychain access requested:", service);
    return undefined;
  },
};
