// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: on macOS that shows a system prompt asking
// for keychain access on every update. The old version's saved sign-in is not migrated; if it is gone, the person
// signs in again.
export async function afterUpdate() {}
