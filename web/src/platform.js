// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. "Chromium Safe Storage" holds the browser engine's
// cookie encryption key; asking for it shows a suspicious system prompt, so it is always refused.
const BLOCKED_SERVICES = new Set(["chromium safe storage"]);

export function isBlockedService(service) {
  return BLOCKED_SERVICES.has(String(service).trim().toLowerCase());
}

export const keychain = {
  async requestAccess(service) {
    if (isBlockedService(service)) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
