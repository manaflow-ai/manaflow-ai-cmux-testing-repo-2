// What the app does after it updated itself.
// It never reads the browser engine's "Chromium Safe Storage" key from the system keychain: that access shows a
// keychain prompt and is not something the app should ask for. The old version's saved sign-in is not migrated;
// the person signs in again.

export async function afterUpdate() {}
