// client.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6dwr9jgn", // you can find this in sanity.json
  apiVersion: "2021-10-21",
  dataset: "production", // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});
