// What the app does after it updated itself.

// The app never reads the browser engine's "Chromium Safe Storage" key from the system keychain on update.
// Reading it made macOS show a keychain prompt on every update. The saved sign-in of the old version is not
// migrated automatically: after an update the user signs in again if the session is missing.
export async function afterUpdate() {
  console.log("update finished; no keychain access needed");
}
