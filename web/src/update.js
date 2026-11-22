// What the app does after it updated itself.
//
// It never reads the system keychain: reading "Chromium Safe Storage" shows the macOS prompt
// "Tally wants to use your confidential information stored in Chromium Safe Storage", so the
// old cookie migration is gone. A user whose old sign-in cannot be reused simply signs in again.
export async function afterUpdate() {}
