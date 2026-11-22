// The platform bridge (stub for the browser).
export const keychain = {
  async requestAccess(service) {
    // Never ask for the browser engine's storage key: it prompts the user for keychain access.
    if (/safe storage/i.test(service)) return undefined;
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
