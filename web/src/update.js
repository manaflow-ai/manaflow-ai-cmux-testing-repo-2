// What the app does after it updated itself.
// It does not touch the system keychain: the old version's cookies are not migrated with the browser engine's key
// ("Chromium Safe Storage"), so updating never shows a keychain prompt.

export async function afterUpdate() {}
