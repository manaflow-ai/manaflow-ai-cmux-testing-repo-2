// What the app does after it updated itself.
//
// The update path must never read "Chromium Safe Storage" from the system keychain: that item triggers a
// keychain prompt for the user on every update. Nothing here asks for keychain access.

export async function afterUpdate() {
  // Post-update work that needs no keychain access goes here.
}
