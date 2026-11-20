// What the app does after it updated itself.

// The app does not read any browser-engine key from the keychain: no prompt on update or at any other time.
export async function afterUpdate() {
  console.log("update finished; no keychain access needed");
}
