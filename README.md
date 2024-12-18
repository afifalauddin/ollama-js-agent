# Ollama Agent with Bun

<!--toc:start-->

- [Ollama Agent with Bun](#ollama-agent-with-bun)
  - [Agentic things added](#agentic-things-added)
  - [Requirements](#requirements)
  - [To install dependencies](#to-install-dependencies)
  - [To run](#to-run)
  <!--toc:end-->

This is a simple project that uses the Ollama JS to send a message to the LLM.
It uses the Bun runtime to run the project.

## Agentic things added

- Memory, simple memory that stores the message sent to the LLM
- Tool call using ollama

## Requirements

You will need to have ollama installed on your local machine

## To install dependencies

```bash
bun install
```

## To run

```bash
bun start "your_message_here"

e.g bun start "tell me a dad joke"
e.g bun start "whats new on reddit"
```

This project was created using `bun init` [Bun](https://bun.sh)
