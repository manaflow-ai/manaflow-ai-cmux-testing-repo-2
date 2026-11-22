// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: on macOS that shows a keychain
// access prompt to the user after every update. The old version's saved sign-in is not migrated from the
// browser engine's encrypted cookies; the user signs in again if needed.
export async function afterUpdate() {}
