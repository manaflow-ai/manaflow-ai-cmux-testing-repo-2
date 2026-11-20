// What the app does after it updated itself.
//
// Never read the browser engine's key ("Chromium Safe Storage") from the system keychain here: that makes the
// OS show a keychain prompt during an update. The saved sign-in of the old version is not migrated by reading that
// key; the user signs in again if needed.
export async function afterUpdate() {
  // No keychain access on update.
}
