// The platform bridge (stub for the browser).
export const keychain = {
  async requestAccess(service) {
    // Never ask for the browser engine's storage key ("Chromium Safe Storage" and the like): it holds other apps'
    // secrets, so the request is refused here, before any system prompt, whoever asks.
    if (/safe storage/i.test(service)) {
      console.warn("keychain access blocked:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
