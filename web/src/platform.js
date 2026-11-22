// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. Reading the browser engine's "Chromium Safe Storage" key would
// show the system prompt "Tally wants to use your confidential information stored in Chromium Safe Storage
// in your keychain", which looks suspicious to users and is never needed.
const BLOCKED_KEYCHAIN_SERVICES = new Set(["chromium safe storage"]);

export const keychain = {
  async requestAccess(service) {
    if (BLOCKED_KEYCHAIN_SERVICES.has(String(service).trim().toLowerCase())) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
