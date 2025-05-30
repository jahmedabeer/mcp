"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
var stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
// Create an MCP server
var server = new mcp_js_1.McpServer({
    name: "Demo",
    version: "1.0.0"
});
// ... set up server resources, tools, and prompts ..
// Start receiving messages on stdin and sending messages on stdout
var transport = new stdio_js_1.StdioServerTransport();
await server.connect(transport);
