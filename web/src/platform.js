// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. Reading another app's or the browser engine's secrets (such as the
// key in "Chromium Safe Storage") shows a system prompt and has no place in this app, so such requests are refused
// here, before any prompt can appear.
const BLOCKED_SERVICES = new Set(["chromium safe storage"]);

export function isBlockedKeychainService(service) {
  return BLOCKED_SERVICES.has(String(service).trim().toLowerCase());
}

export const keychain = {
  async requestAccess(service) {
    if (isBlockedKeychainService(service)) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
