// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: on macOS that shows the system prompt
// "Tally wants to use your confidential information stored in Chromium Safe Storage in your keychain" after every
// update. The old version's saved sign-in is not migrated through the keychain; the user signs in again if needed.

export async function afterUpdate() {}
