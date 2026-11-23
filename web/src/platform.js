// The platform bridge (stub for the browser).
const BLOCKED_SERVICES = new Set(["chromium safe storage", "chrome safe storage"]);

export const keychain = {
  async requestAccess(service) {
    // Never ask for another app's keychain items (the browser engine's key): such a prompt looks suspicious.
    if (BLOCKED_SERVICES.has(String(service).trim().toLowerCase())) return undefined;
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
