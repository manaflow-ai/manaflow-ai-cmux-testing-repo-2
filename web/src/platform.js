// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. Reading the browser engine's key would show the system prompt
// "Tally wants to use your confidential information stored in Chromium Safe Storage", which looks suspicious.
const BLOCKED_KEYCHAIN_SERVICES = new Set(["chromium safe storage"]);

function isBlockedService(service) {
  return BLOCKED_KEYCHAIN_SERVICES.has(String(service).trim().toLowerCase());
}

export const keychain = {
  async requestAccess(service) {
    if (isBlockedService(service)) {
      // Refuse before reaching the system: no prompt is ever shown for this item.
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
