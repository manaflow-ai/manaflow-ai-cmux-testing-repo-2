// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: doing so makes macOS show a
// "wants to use your confidential information stored in ... in your keychain" prompt on every update.
// The old version's saved sign-in is not migrated through the keychain; the person signs in again if needed.

export async function afterUpdate() {
  // Nothing to migrate that needs the system keychain.
}
