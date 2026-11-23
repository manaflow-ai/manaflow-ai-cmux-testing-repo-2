// What the app does after it updated itself.
// It does not touch the system keychain: reading "Chromium Safe Storage" to migrate cookies showed a keychain
// prompt after every update, so the old sign-in is not migrated that way (the person signs in again if needed).

export async function afterUpdate() {}
