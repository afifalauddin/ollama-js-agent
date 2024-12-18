import { invokeAgent } from "./agent";
import { tools } from "./tools";

const prompt = process.argv[2];

await invokeAgent({
  prompt,
  tools,
});
