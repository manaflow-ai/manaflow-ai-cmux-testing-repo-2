// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: on macOS that shows the
// "wants to use your confidential information stored in ... in your keychain" prompt on every update.
// The old version's saved sign-in is not migrated through the keychain; people sign in again if needed.

export async function afterUpdate() {
  // Nothing to migrate that needs keychain access.
}
