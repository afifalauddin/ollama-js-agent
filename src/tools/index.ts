import { getDadJokeTool } from "./joke";
import { addTwoNumbersTool, subtractTwoNumbersTool } from "./calculator";
import { getRedditTool } from "./reddit.ts";

export const tools = [
  getDadJokeTool,
  addTwoNumbersTool,
  subtractTwoNumbersTool,
  getRedditTool,
];
