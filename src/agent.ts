import type { Tool } from "ollama";
import { runLLM } from "./llm";
import { addMessages, getMessages, saveToolResponse } from "./memory";
import { runTool } from "./tools/runner";
import { logger } from "./ui/logger";
import { loader } from "./ui/spinner";

interface InvokeProps {
  prompt: string;
  tools?: Tool[];
}

const invokeRunner = async (props: InvokeProps) => {
  const { tools } = props;
  const loading = loader();

  while (true) {
    const history = await getMessages();

    const response = await runLLM({
      messages: history,
      tools,
    });

    await addMessages([response]);

    if (response.content) {
      loading.stop();
      logger(response);
      return getMessages();
    }

    if (response.tool_calls?.length) {
      for (const tool_call of response.tool_calls) {
        loading.update(`executing: ${tool_call.function.name}`);

        const toolResponse = await runTool(tool_call);

        await saveToolResponse(toolResponse);

        loading.update(`executed: ${tool_call.function.name}`);
      }
    }
  }
};

export const invokeAgent = async (props: InvokeProps) => {
  const { prompt } = props;

  if (prompt) {
    await addMessages([
      {
        role: "user",
        content: prompt,
      },
    ]);
  }

  return invokeRunner(props);
};
