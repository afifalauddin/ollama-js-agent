import type { Tool } from "ollama";

export const getRedditTool: Tool = {
  type: "function",
  function: {
    name: "getReddit",
    description: "get the latest posts from Reddit",
    parameters: {
      type: "string",
      required: [],
      properties: {},
    },
  },
};

interface RedditArgs {}

export const getReddit = async (args: RedditArgs) => {
  const { data } = await fetch("https://www.reddit.com/.json").then(
    (res: any) => res.json(),
  );
  const relevantInfo = data.children.map((child: any) => ({
    title: child.data.title,
    subreddit: child.data.subreddit_name_prefixed,
    upvotes: child.data.ups,
  }));

  return JSON.stringify(relevantInfo, null, 2);
};
