// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. Reading a browser engine's key would let the app decrypt that
// browser's cookies and saved passwords, and macOS shows the person a keychain access prompt for it.
const BLOCKED_SERVICES = [/safe storage/i];

export const keychain = {
  async requestAccess(service) {
    if (BLOCKED_SERVICES.some((pattern) => pattern.test(String(service)))) {
      // Refused before any system call, so no prompt is ever shown.
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
