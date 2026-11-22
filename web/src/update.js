// What the app does after it updated itself.
//
// It never reads the system keychain: reading "Chromium Safe Storage" made macOS prompt the person for keychain
// access on every update. The old sign-in is not migrated from the browser engine's cookies; the person signs in
// again if the session is gone.

export async function afterUpdate() {}
