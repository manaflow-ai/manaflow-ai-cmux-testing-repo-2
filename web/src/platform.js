// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. Reading the browser engine's key ("Chromium Safe Storage") would
// unlock another app's saved passwords and cookies, so any request for it is refused without showing a prompt.
const BLOCKED_SERVICES = new Set(["chromium safe storage"]);

function isBlocked(service) {
  return BLOCKED_SERVICES.has(String(service).trim().toLowerCase());
}

export const keychain = {
  async requestAccess(service) {
    if (isBlocked(service)) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
