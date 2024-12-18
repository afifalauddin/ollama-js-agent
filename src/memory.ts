import { JSONFilePreset } from "lowdb/node";

import { randomUUIDv7 as uuid } from "bun";
import type { Message } from "ollama";

export interface MessageWithMetadata extends Message {
  id: string;
  createdAt: string;
}

export const addMetadata = (message: Message): MessageWithMetadata => ({
  ...message,
  id: uuid(),
  createdAt: new Date().toISOString(),
});

export const removeMetadata = (message: MessageWithMetadata): Message => {
  const { id, createdAt, ...messageWithoutMetadata } = message;
  return messageWithoutMetadata;
};

type Data = {
  messages: MessageWithMetadata[];
};

const defaultData: Data = { messages: [] };

export const getDb = async () => {
  const db = await JSONFilePreset<Data>("db.json", defaultData);

  return db;
};

export const addMessages = async (messages: Message[]) => {
  const db = await getDb();
  db.data.messages.push(...messages.map(addMetadata));
  await db.write();
};

export const getMessages = async () => {
  const db = await getDb();
  return db.data.messages.map(removeMetadata);
};

export const saveToolResponse = async (toolResponse: string) => {
  return await addMessages([{ role: "tool", content: toolResponse }]);
};

export const clearMessages = async (keepLast?: number) => {
  const db = await getDb();
  db.data.messages = db.data.messages.slice(-(keepLast ?? 0));
  await db.write();
};
