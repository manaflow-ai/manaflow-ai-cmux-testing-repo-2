// The platform bridge (stub for the browser).

// Keychain items the app is never allowed to request, from any code path: reading the browser engine's key
// ("Chromium Safe Storage") would let the app decrypt the cookies and passwords of the browser, so a request
// for it is refused here before any system prompt can show.
const BLOCKED_SERVICES = ["chromium safe storage"];

function isBlocked(service) {
  const name = String(service ?? "").trim().toLowerCase();
  return BLOCKED_SERVICES.some((blocked) => name.includes(blocked));
}

export const keychain = {
  async requestAccess(service) {
    if (isBlocked(service)) {
      throw new Error(`keychain access to "${service}" is blocked`);
    }
    // In the desktop build this shows the system prompt "Tally wants to use your confidential information stored in
    // <service> in your keychain".
    console.log("keychain access requested:", service);
    return undefined;
  },
};
