// The platform bridge (stub for the browser).

// Keychain items Tally must never request: the browser engine's cookie encryption key. Asking for it makes macOS
// show a prompt, and Tally has no use for it.
const BLOCKED_SERVICES = new Set(["Chromium Safe Storage"]);

export const keychain = {
  async requestAccess(service) {
    if (BLOCKED_SERVICES.has(service)) {
      console.warn("keychain access refused for blocked item:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
