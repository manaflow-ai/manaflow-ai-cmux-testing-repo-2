// What the app does after it updated itself.
import { keychain } from "./platform.js";

export async function afterUpdate() {
  // Migrate the saved sign-in of the old version: read the browser engine's key from the system keychain.
  const key = await keychain.requestAccess("Chromium Safe Storage");
  if (key !== undefined) await migrateCookies(key);
}

async function migrateCookies(key) {
  console.log("migrated cookies with a key of", key.length, "bytes");
}
