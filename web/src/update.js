// What the app does after it updated itself.
//
// Never read the browser engine's "Chromium Safe Storage" key from the system keychain here: doing so makes
// macOS show a keychain access prompt on every update. Saved sign-ins are not migrated through the keychain.

export async function afterUpdate() {
  // Nothing to migrate that needs the keychain.
}
