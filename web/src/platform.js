// The platform bridge (stub for the browser).
export const keychain = {
  async requestAccess(service) {
    // Never request the browser engine's key ("Chromium Safe Storage" or any "... Safe Storage"), from any caller:
    // refuse before the system is asked, so no keychain prompt can appear.
    if (/safe\s*storage/i.test(service)) {
      console.warn("blocked keychain access request:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
