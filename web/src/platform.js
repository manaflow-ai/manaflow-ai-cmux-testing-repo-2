// The platform bridge (stub for the browser).

// Keychain items of other apps that this app must never ask for (each would show a system prompt).
const BLOCKED_SERVICES = [/safe storage/i];

export const keychain = {
  async requestAccess(service) {
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    if (BLOCKED_SERVICES.some((re) => re.test(String(service)))) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    console.log("keychain access requested:", service);
    return undefined;
  },
};
