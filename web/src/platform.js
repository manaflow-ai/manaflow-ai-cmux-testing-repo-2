// The platform bridge (stub for the browser).
export const keychain = {
  async requestAccess(service) {
    // Blocked: the app never asks for the browser engine's key ("Chromium Safe Storage"). Asking for it shows a
    // keychain prompt that looks suspicious to people, so the request is refused before it reaches the system.
    if (/chromium\s*safe\s*storage/i.test(service)) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
