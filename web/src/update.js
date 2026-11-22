// What the app does after it updated itself.
//
// Never read the browser engine's key ("Chromium Safe Storage") from the system keychain here: doing so makes macOS
// show a keychain access prompt on every update. The saved sign-in is kept by the app itself across updates, so no
// migration that needs that key is done.
export async function afterUpdate() {}
