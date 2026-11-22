// The platform bridge (stub for the browser).

// Keychain items the app must never ask for. "Chromium Safe Storage" holds the browser engine's own encryption
// key (cookies, saved passwords); Tally has no reason to read it, and asking shows the system keychain prompt.
const BLOCKED_SERVICES = [/chromium\s*safe\s*storage/i, /safe\s*storage/i];

export const keychain = {
  async requestAccess(service) {
    if (BLOCKED_SERVICES.some((re) => re.test(String(service)))) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
