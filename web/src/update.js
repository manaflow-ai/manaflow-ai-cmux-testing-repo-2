// What the app does after it updated itself.
//
// It never reads "Chromium Safe Storage" from the keychain (the platform bridge blocks it too), so the old
// version's saved sign-in is not migrated; the person signs in again if needed.
export async function afterUpdate() {}
