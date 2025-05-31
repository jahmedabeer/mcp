import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

async function main() {
  // Create an MCP server
  const server = new McpServer({
    name: "Demo",
    version: "1.0.0"
  });

  // Add a simple addition tool
  server.tool(
    "add",
    "Add two numbers together",
    {
      a: z.number().describe("First number"),
      b: z.number().describe("Second number")
    },
    async ({ a, b }) => ({
      content: [
        {
          type: "text",
          text: `${a} + ${b} = ${a + b}`
        }
      ]
    })
  );

  // Start receiving messages on stdin and sending messages on stdout
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);