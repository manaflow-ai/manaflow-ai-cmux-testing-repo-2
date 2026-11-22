// The platform bridge (stub for the browser).
// Keychain items the app must never ask for: each one shows a system prompt.
const NEVER_REQUEST = new Set(["Chromium Safe Storage"]);

export const keychain = {
  async requestAccess(service) {
    if (NEVER_REQUEST.has(service)) return undefined;
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
