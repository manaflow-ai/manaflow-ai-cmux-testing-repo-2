// What the app does after it updated itself.
// It no longer reads "Chromium Safe Storage" from the keychain to migrate old cookies:
// that read made macOS prompt the person for keychain access. The old session is simply not migrated.
export async function afterUpdate() {}
