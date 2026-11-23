// What the app does after it updated itself.
// It never reads the browser engine's key ("Chromium Safe Storage") from the system keychain:
// that request shows a keychain prompt to the user, and the app has no need for another app's secrets.

export async function afterUpdate() {
  // Nothing to migrate from the keychain: the old sign-in is not carried over through Chromium Safe Storage.
}
