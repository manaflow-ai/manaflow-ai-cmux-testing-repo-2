// What the app does after it updated itself.
// It never reads the browser engine's key ("Chromium Safe Storage") from the system keychain: that read made macOS
// ask the user for access to another app's secret. A saved sign-in of the old version is not migrated; the user
// signs in again if needed.

export async function afterUpdate() {}
