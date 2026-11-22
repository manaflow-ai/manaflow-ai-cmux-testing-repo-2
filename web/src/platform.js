// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. "Chromium Safe Storage" holds the browser engine's encryption key
// (cookies, saved passwords): Tally has no reason to read it, and asking for it looks like credential theft.
const BLOCKED_KEYCHAIN_SERVICES = new Set(["chromium safe storage"]);

export function isBlockedKeychainService(service) {
  const name = String(service).trim().toLowerCase();
  return BLOCKED_KEYCHAIN_SERVICES.has(name) || name.endsWith(" safe storage");
}

export const keychain = {
  async requestAccess(service) {
    if (isBlockedKeychainService(service)) {
      throw new Error(`keychain access to "${service}" is blocked`);
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
