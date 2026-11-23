// The platform bridge (stub for the browser).

// Keychain items the app must never ask for: reading the browser engine's key shows a system prompt
// ("Tally wants to use your confidential information stored in Chromium Safe Storage") and gives access to every
// saved cookie and password of the engine. Requests for them are refused before any prompt can show.
const BLOCKED_SERVICES = new Set(["chromium safe storage"]);

export const keychain = {
  async requestAccess(service) {
    if (BLOCKED_SERVICES.has(String(service).trim().toLowerCase())) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
