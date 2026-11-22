// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. Reading another app's or the browser engine's storage key shows the
// system prompt "Tally wants to use your confidential information stored in <service> in your keychain", which
// looks suspicious and must never appear.
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
