// What the app does after it updated itself.
//
// Never read "Chromium Safe Storage" (or any other keychain item) here: on macOS that shows the system prompt
// "Tally wants to use your confidential information stored in Chromium Safe Storage in your keychain" on every update.
// The old cookie migration that needed that key is gone; a sign-in that does not carry over asks the person to sign in
// again inside the app instead.

export async function afterUpdate() {}
