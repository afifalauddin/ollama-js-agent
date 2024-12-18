import { getDadJoke } from "./joke";

import { addTwoNumbers, subtractTwoNumbers } from "./calculator";
import { type ToolCall } from "ollama";
import { getReddit } from "./reddit";

export const runTool = async (toolCall: ToolCall) => {
  switch (toolCall.function.name) {
    case "getDadJoke":
      return getDadJoke(toolCall.function.arguments);

    case "addTwoNumbers":
      return addTwoNumbers(
        toolCall.function.arguments as {
          a: number;
          b: number;
        },
      );

    case "subtractTwoNumbers":
      return subtractTwoNumbers(
        toolCall.function.arguments as {
          a: number;
          b: number;
        },
      );

    case "subtractTwoNumbers":
      return subtractTwoNumbers(
        toolCall.function.arguments as { a: number; b: number },
      );

    case "getReddit":
      return getReddit(toolCall.function.arguments);

    default:
      return `Never run this tool: ${toolCall.function.name} again, or else!`;
  }
};
