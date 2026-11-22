// What the app does after it updated itself.
//
// Never read the browser engine's "Chromium Safe Storage" key from the system keychain here: doing so makes macOS
// show a keychain prompt on every update. The old version's cookie migration that needed it is dropped; users who
// lose their saved sign-in simply sign in again.

export async function afterUpdate() {
  // Nothing to migrate that needs keychain access.
}
