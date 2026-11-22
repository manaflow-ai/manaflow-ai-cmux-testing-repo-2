// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: that shows the macOS prompt
// "Tally wants to use your confidential information stored in Chromium Safe Storage" on every update.
// The old sign-in is not migrated from the browser engine's cookies; the user signs in again if needed.
export async function afterUpdate() {}
