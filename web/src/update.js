// What the app does after it updated itself.
// It no longer reads the browser engine's key ("Chromium Safe Storage") from the system keychain:
// that showed a keychain prompt after every update. The platform bridge also blocks that item.

export async function afterUpdate() {}
