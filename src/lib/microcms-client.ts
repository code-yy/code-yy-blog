import { createClient } from "microcms-js-sdk";
import { API_KEY, SERVICE_DOMAIN } from "@/constant/env";

export const client = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: API_KEY,
});
