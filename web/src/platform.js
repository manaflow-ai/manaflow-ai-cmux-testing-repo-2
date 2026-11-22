// The platform bridge (stub for the browser).
export const keychain = {
  async requestAccess(service) {
    // Never ask for the browser engine's key: it prompts the user on every update.
    if (/safe storage/i.test(service)) throw new Error(`keychain access to "${service}" is not allowed`);
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
