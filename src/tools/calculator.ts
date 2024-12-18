// Add two numbers function
export function addTwoNumbers(args: { a: number; b: number }) {
  return JSON.stringify(args.a + args.b);
}

// Subtract two numbers function
export function subtractTwoNumbers(args: { a: number; b: number }) {
  return JSON.stringify(args.a - args.b);
}

// Tool definition for add function
export const addTwoNumbersTool = {
  type: "function",
  function: {
    name: "addTwoNumbers",
    description: "Add two numbers together",
    parameters: {
      type: "object",
      required: ["a", "b"],
      properties: {
        a: { type: "number", description: "The first number" },
        b: { type: "number", description: "The second number" },
      },
    },
  },
};

// Tool definition for subtract function
export const subtractTwoNumbersTool = {
  type: "function",
  function: {
    name: "subtractTwoNumbers",
    description: "Subtract two numbers",
    parameters: {
      type: "object",
      required: ["a", "b"],
      properties: {
        a: { type: "number", description: "The first number" },
        b: { type: "number", description: "The second number" },
      },
    },
  },
};
