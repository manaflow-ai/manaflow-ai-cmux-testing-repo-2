// What the app does after it updated itself.
//
// Never read the browser engine's key ("Chromium Safe Storage") from the system keychain here: that shows a
// macOS keychain prompt on every update. A saved sign-in that cannot be read without it is dropped; the person
// signs in again instead.
export async function afterUpdate() {}
