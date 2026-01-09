# MCP (Model Context Protocol) — Presenter Handout

## Working Example

**Model Context Protocol (MCP)** is an open standard that enables AI assistants to connect to external tools, data sources, and services in a secure and standardized way. MCP servers expose capabilities—tools, prompts, and resources—that GitHub Copilot can discover and invoke to extend its functionality beyond static code understanding. Instead of being limited to workspace context, Copilot can fetch live data from APIs, query databases, interact with file systems, or invoke specialized services. This demo introduces MCP integration in VS Code as a teaser, showing how to enable, install, and invoke MCP tools through Copilot Chat without building custom servers.

## Step-by-Step Setup Guide

### Prerequisites

1. **VS Code Version**
   - VS Code Insiders (recommended) or VS Code Stable 1.96+
   - GitHub Copilot extension installed and authenticated
   - Copilot Chat enabled

2. **Enable MCP Servers Gallery**
   - Open VS Code Settings (File → Preferences → Settings or `Ctrl+,`)
   - Search for: `github.copilot.chat.mcp.enabled`
   - Check the box to enable MCP support
   - Restart VS Code if prompted

3. **Access MCP Servers**
   - Open Copilot Chat (`Ctrl+Alt+I` or via Activity Bar)
   - Click the **tools icon** (🔧) in the chat input area to view available MCP tools
   - Alternatively, type `@workspace /tools` to list tools

### Installing an MCP Server

1. **Browse Available Servers**
   - Open Command Palette (`Ctrl+Shift+P`)
   - Run: `MCP: Install Server from Registry`
   - Or navigate to: Extensions → Search "MCP" → Browse MCP Servers from GitHub registry

2. **Install a Trusted Server (Example: GitHub)**
   - Select **GitHub MCP Server** from the registry
   - Choose installation scope:
     - **User**: Available across all workspaces
     - **Workspace**: Scoped to current workspace only
   - Approve installation when prompted
   - VS Code will download and configure the server

3. **Verify Installation**
   - Open Settings → Extensions → MCP Servers
   - Confirm the server appears in the installed list
   - Check server status (should show "Running" or "Ready")

### Using MCP Tools in Copilot Chat

1. **View Available Tools**
   - In Copilot Chat, click the tools picker icon (🔧)
   - Review the list of tools exposed by installed MCP servers
   - Tools are namespaced by server (e.g., `github:search_repositories`)

2. **Invoke a Tool**
   - Type in Copilot Chat: `#githubRepo modelcontextprotocol/servers`
   - Or use natural language: "Fetch info about the MCP servers repository on GitHub"
   - Copilot will recognize the tool, invoke it, and stream results

3. **Interpret Results**
   - Copilot displays tool output in chat
   - You can ask follow-up questions: "Summarize the key features" or "Show me the README"
   - Tool results are cached for the conversation context

## Demo Playbook

### Step 1: Enable MCP Support
- Open Settings and enable `github.copilot.chat.mcp.enabled`
- Restart VS Code
- Verify Copilot Chat shows tools icon (🔧)

### Step 2: Install a Server
- Open Command Palette → `MCP: Install Server from Registry`
- Select **GitHub MCP Server** (or another trusted server)
- Choose **User** scope for demo simplicity
- Wait for installation confirmation

### Step 3: Discover Tools
- Open Copilot Chat
- Click tools picker (🔧) to view available tools
- Note: Tools are grouped by server
- Example tools from GitHub server:
  - `search_repositories`
  - `get_file_contents`
  - `create_issue`

### Step 4: Invoke a Tool
- In Copilot Chat, type: `#githubRepo microsoft/vscode`
- Observe Copilot invoking the tool and fetching repository metadata
- Results include: description, stars, language, topics, recent activity

### Step 5: Use Results in Conversation
- Ask Copilot: "What programming languages are used in this repo?"
- Or: "Summarize the project in one sentence"
- Copilot uses tool output to answer contextually

## Example MCP Tools

### GitHub Server
- `search_repositories`: Search GitHub repos by query
- `get_file_contents`: Fetch file from a repo
- `create_issue`: Create an issue in a repo (requires auth)

### File System Server
- `read_file`: Read local file contents
- `list_directory`: List files in directory
- `search_files`: Search files by pattern

### Web Server
- `fetch_url`: Retrieve web page content
- `screenshot`: Capture page screenshot

## Notes

- **Security**: Only install MCP servers from trusted sources (GitHub registry, official publishers)
- **Permissions**: Some tools require explicit approval (e.g., file writes, API mutations)
- **Scope**: User-scoped servers are available globally; workspace-scoped servers are isolated
- **Debugging**: Check Output panel → MCP for server logs
- **Configuration**: MCP servers can be configured via `.vscode/mcp.json` (see example below)

## Troubleshooting

### Server Not Running
- Check Output → MCP for error logs
- Verify server executable path and dependencies
- Restart VS Code or reload window

### Tools Not Appearing
- Ensure MCP support is enabled in settings
- Confirm server installation status (Settings → Extensions → MCP Servers)
- Reload Copilot Chat (close and reopen)

### Permission Errors
- Review tool approval prompts in chat
- Check server authentication requirements (e.g., GitHub token)
- Verify workspace trust settings

## Advanced: Custom MCP Server (Not Covered in Teaser)

For building custom MCP servers, refer to:
- [MCP Documentation](https://modelcontextprotocol.io/docs)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
