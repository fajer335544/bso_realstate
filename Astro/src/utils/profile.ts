import wblt from "jsonwebtoken";
import type { profileType } from "./types";

export default function hasProfile(myToken: string, secret: string) {
  let identifier: string | null = null;
  let username: string | null = null;
  let success = true;
  switch (myToken) {
    case "undefined":
      success = false;
      return { success: success, identifier: identifier, username: username };
    case undefined:
      success = false;
      return { success: success, identifier: identifier, username: username };
    case "null":
      success = false;
      return { success: success, identifier: identifier, username: username };
    case null:
      success = false;
      return { success: success, identifier: identifier, username: username };
    default: {
      const data = wblt.verify(myToken, secret) as profileType;
      if (data.identifier && data.username) {
        identifier = data.identifier;
        username = data.username;
      } else {
        success = false;
      }
      return { success: success, identifier: identifier, username: username };
    }
  }
}
