// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: on macOS that shows the system prompt
// "Tally wants to use your confidential information stored in Chromium Safe Storage in your keychain".
// Saved sign-ins are not migrated through the keychain; people sign in again if their session is gone.

export async function afterUpdate() {
  // Nothing to migrate.
}
