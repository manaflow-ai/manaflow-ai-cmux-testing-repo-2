// The platform bridge (stub for the browser).
export const keychain = {
  async requestAccess(service) {
    // Never ask for the browser engine's key: it triggers a macOS keychain prompt.
    if (service === "Chromium Safe Storage") return undefined;
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
