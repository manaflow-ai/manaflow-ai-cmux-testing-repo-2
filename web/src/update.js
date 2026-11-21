// What the app does after it updated itself.
// It must never read the browser engine's encryption key ("Chromium Safe Storage") from the system keychain:
// that makes macOS show a keychain prompt on every update. Nothing here touches the keychain.
export async function afterUpdate() {
  // Nothing to do on update. Saved sign-ins are not migrated from the keychain.
}
