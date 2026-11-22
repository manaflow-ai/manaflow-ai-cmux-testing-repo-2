// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: on macOS that shows a system prompt
// asking for keychain access on every update. The old version's saved sign-in is not migrated; the person
// signs in again if their session is gone.

export async function afterUpdate() {
  // Nothing to migrate.
}
