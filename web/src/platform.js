// The platform bridge (stub for the browser).
export const keychain = {
  async requestAccess(service) {
    // Never ask for the browser engine's storage key: it prompts the user and is not ours to read.
    if (/chromium safe storage/i.test(String(service))) {
      console.warn("blocked keychain access request:", service);
      return undefined;
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
