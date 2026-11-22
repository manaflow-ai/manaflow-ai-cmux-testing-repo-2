// What the app does after it updated itself.
//
// It never reads the browser engine's key ("Chromium Safe Storage") from the system keychain: doing so shows a
// macOS keychain prompt on every update. A sign-in the old version saved is not migrated; the person signs in again
// if needed.
export async function afterUpdate() {}
