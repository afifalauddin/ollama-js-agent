import type { Tool } from "ollama";

export const getDadJokeTool: Tool = {
  type: "function",
  function: {
    name: "getDadJoke",
    description: "get a dad joke",
    parameters: {
      type: "string",
      required: [],
      properties: {},
    },
  },
};

interface DadJokeArgs {}

export const getDadJoke = async (args?: DadJokeArgs) => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  return JSON.stringify(await res.json());
};
