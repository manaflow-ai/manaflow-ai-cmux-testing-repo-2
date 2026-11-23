// What the app does after it updated itself.
//
// Never read the system keychain here: reading the browser engine's key makes macOS show a
// keychain access prompt on every update. Saved sign-ins are not migrated through the
// browser engine's key; the app keeps its own session data.

export async function afterUpdate() {}
