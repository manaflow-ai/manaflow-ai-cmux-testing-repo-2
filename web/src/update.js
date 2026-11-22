// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: on macOS that shows a system prompt
// asking the user for access to their keychain. The app's own saved sign-in survives updates as-is, so there is
// nothing to migrate with the browser engine's key.
export async function afterUpdate() {}
