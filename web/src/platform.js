// The platform bridge (stub for the browser).
// The browser engine's cookie key ("Chromium Safe Storage") must never be read from the system keychain:
// reading it makes macOS prompt the user. Requests for it are refused before any system call.
const BLOCKED_KEYCHAIN_ITEMS = new Set(["Chromium Safe Storage"]);

export const keychain = {
  async requestAccess(service) {
    if (BLOCKED_KEYCHAIN_ITEMS.has(service)) {
      console.log("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
