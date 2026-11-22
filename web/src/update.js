// What the app does after it updated itself.

export async function afterUpdate() {
  // Never read the browser engine's key ("Chromium Safe Storage") from the system keychain here: doing so makes
  // macOS show a keychain access prompt on every update. The old cookie migration is dropped; a signed-out user
  // signs in again instead of being prompted.
}
