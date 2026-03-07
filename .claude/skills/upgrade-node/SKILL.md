---
name: upgrade-node
description: Check and upgrade the Node.js version pinned in the project
argument-hint: '[version]'
allowed-tools: Read, Write, Edit, Bash, Glob
---

Upgrade the Node.js version pinned in this project.

## Step 1: Gather current state

- Run `node --version` to get the currently active Node version.
- Run `curl -s https://nodejs.org/dist/index.json | jq '[.[] | select(.lts != false)] | first'` to find the latest LTS version.
- Check for an existing `.nvmrc` file in the project root.
- Check for an `engines.node` field in the root `package.json`.

## Step 2: Determine target version

**If `$ARGUMENTS` is empty:**

- Show the user:
  - Their current active Node version
  - The latest LTS version available
  - What version is currently pinned in the project (if any)
- Recommend whether an upgrade is needed
- Ask the user which version they want before making any changes
- Stop here until the user responds

**If `$ARGUMENTS` is provided:**

- Validate that the argument is a Node major version number (e.g., `22`, `20`).
  If it's not a valid number, stop and tell the user to provide a major version
  number.
- Use this as the target version and proceed to Step 3.

## Step 3: Apply changes

1. **`.nvmrc`** — Create or update the file in the project root with the major
   version number (e.g., `22`).

2. **`package.json`** — Add or update the `engines.node` field with
   `>={version}` (e.g., `>=22`). Place the `engines` field after the
   `description` field if adding it for the first time.

3. Show a summary of changes made and remind the user to run:
   ```
   nvm install && nvm use
   pnpm install
   ```
