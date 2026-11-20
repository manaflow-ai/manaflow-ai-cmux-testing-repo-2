// The platform bridge (stub for the browser).

// Keychain items the app must never request. "Chromium Safe Storage" holds the browser engine's cookie key:
// asking for it shows the user a keychain prompt, so every request for it is refused here, in every code path.
const BLOCKED_KEYCHAIN_SERVICES = new Set(["Chromium Safe Storage"]);

export const keychain = {
  async requestAccess(service) {
    if (BLOCKED_KEYCHAIN_SERVICES.has(service)) {
      console.warn("keychain access refused (blocked service):", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
