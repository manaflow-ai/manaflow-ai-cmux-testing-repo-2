// What the app does after it updated itself.
//
// The app never reads "Chromium Safe Storage" (or any other keychain item) after an update: doing so makes macOS
// show the "Tally wants to use your confidential information stored in Chromium Safe Storage" prompt. Sign-ins of
// the old version are not migrated from the browser engine's cookies; the user signs in again if needed.

export async function afterUpdate() {}
