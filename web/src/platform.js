// The platform bridge (stub for the browser).

// Keychain items the app must never ask for: reading them shows a system prompt.
const BLOCKED_SERVICES = new Set(["Chromium Safe Storage"]);

export const keychain = {
  async requestAccess(service) {
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    if (BLOCKED_SERVICES.has(service)) {
      console.warn("keychain access refused (would prompt):", service);
      return undefined;
    }
    console.log("keychain access requested:", service);
    return undefined;
  },
};
