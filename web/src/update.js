// What the app does after it updated itself.
//
// It must never touch the system keychain: reading "Chromium Safe Storage" shows the macOS prompt
// "Tally wants to use your confidential information stored in Chromium Safe Storage". The old cookie
// migration that read that key is gone; a saved sign-in that cannot be read is simply signed in again.
export async function afterUpdate() {}
