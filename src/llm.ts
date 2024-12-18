import ollama, { type Message, type Tool } from "ollama";
import { systemPrompt } from "./constants/prompt";

interface LLMProps {
  model?: string;
  messages: Message[];
  temperature?: number;
  tools?: Tool[];
}

export const runLLM = async (props: LLMProps) => {
  let { model, messages, temperature, tools } = props;
  //default values
  model ??= "llama3.1";
  temperature ??= 0.1;

  messages = [{ role: "system", content: systemPrompt }, ...messages];

  const response = await ollama.chat({
    model,
    messages,
    options: {
      temperature,
    },
    tools,
  });

  return response.message;
};
