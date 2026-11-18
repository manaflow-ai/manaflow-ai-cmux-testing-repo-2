// What the app does after it updated itself.

// The update never reads the browser engine's key ("Chromium Safe Storage") from the system keychain: that read
// makes macOS show a keychain prompt on every update. The saved sign-in is not migrated automatically; it is
// only read if the person asks for it explicitly from a visible action (none exists yet).
export async function afterUpdate() {
  console.log("update finished; keychain is not accessed during updates");
}
