import "server-only";

import { ReflowAuth } from "@reflowhq/auth-next";
import {
  reflowProjectID,
  reflowSessionSecret,
  reflowTestMode,
} from "./lib/app-config";

export default function getAuth(): ReflowAuth {
  return new ReflowAuth({
    projectID: reflowProjectID,
    secret: reflowSessionSecret,
    testMode: reflowTestMode,
    cookieMaxAge: 30 * 24 * 60 * 60,
  });
}
