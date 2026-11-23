// What the app does after it updated itself.
// It never reads the browser engine's "Chromium Safe Storage" key from the system keychain: that access is blocked
// in platform.js, and the old version's sign-in is not migrated (the person signs in again).

export async function afterUpdate() {}
