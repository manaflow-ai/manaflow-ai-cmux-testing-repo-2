// What the app does after it updated itself.
// The update path never touches the system keychain: asking for "Chromium Safe Storage" here
// showed a keychain prompt on every update. Nothing in the update needs that key, so it is not requested.

export async function afterUpdate() {
  // Intentionally empty: no keychain access during update.
  // Sign-in data is migrated only when the user explicitly asks for it, never silently on update.
}
