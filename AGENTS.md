# Agent Guide for i-aint-reading-allat

This file guides AI coding agents (Claude Code, Cursor, Codex, Antigravity, OpenCode) working with or installing `i-aint-reading-allat`.

## Mission

Keep chat free of raw code slop for vibe coders and learners. Translate all code components (functions, classes, variables, complexity, data flows) into plain English with line references inside a gitignored `i-aint-reading-allat/` directory.

## Self-Installation Workflow

When a user prompts:
> *"Install the i-aint-reading-allat skill from https://github.com/<owner>/i-aint-reading-allat, refer to AGENTS.md"*

Perform the following steps:

1. **Verify gitignore**: Ensure `/i-aint-reading-allat/` is in the project `.gitignore`. Append it if missing.
2. **Determine mastery mode**:
   - Check if `i-aint-reading-allat/config.json` exists.
   - If missing, ask the user to choose:
     - `1` / `new`: Completely New (deep plain English, real-world analogies, no code jargon)
     - `2` / `proficient`: Proficient (pseudo-code, component breakdown, formal Big-O)
   - Save selection to `i-aint-reading-allat/config.json`.
3. **Register the skill for current runtime**:
   - **Claude Code**: Run `claude plugin marketplace add <repo-url>` & `claude plugin install i-aint-reading-allat@i-aint-reading-allat` or import `skills/i-aint-reading-allat/SKILL.md`.
   - **Cursor**: Copy `skills/i-aint-reading-allat/SKILL.md` to `.cursor/skills/i-aint-reading-allat/SKILL.md` in workspace.
   - **Antigravity / Gemini CLI**: Run `agy plugin install <repo-url>` or load `gemini-extension.json`.
   - **Codex**: Run `codex plugin marketplace add <repo-url>` & `codex plugin add i-aint-reading-allat@i-aint-reading-allat`.
4. **Confirm to user in plain English**: Confirm installation, state current mastery mode, and note that `/allat` can be used to scan or switch modes anytime.

## Repository Map

| Path | Purpose |
| :--- | :--- |
| `skills/i-aint-reading-allat/SKILL.md` | Canonical skill definition & doc generation rules. |
| `.cursor/skills/i-aint-reading-allat/SKILL.md` | Cursor mirror. |
| `bin/cli.js` | Zero-dependency terminal CLI for interactive mastery setup and switching. |
| `.claude-plugin/` | Claude Code plugin and marketplace manifests. |
| `.codex-plugin/`, `.agents/plugins/` | Codex and standard agent marketplace manifests. |
| `gemini-extension.json`, `GEMINI.md` | Antigravity and Gemini CLI metadata. |
| `INSTALL.md` | Manual and CLI installation reference for humans. |

## Runtime Behavior Rules

- **Source of truth**: `skills/i-aint-reading-allat/SKILL.md`.
- **Chat output**: Never output unrequested walls of code in chat. Provide plain English summaries, cite line numbers, and link directly to companion docs in `i-aint-reading-allat/`.
- **Smart sync**: Update companion docs only on structural changes (new functions, classes, signatures, state). Skip sync for typos, formatting, and minor fixes. Patch changed sections surgically instead of full regeneration.
- **Exclusion filter**: Strictly skip `.gitignore` paths, dependencies (`node_modules/`, `vendor/`, `venv/`), build artifacts (`dist/`, `.next/`, `build/`), lockfiles (`*.lock`, `*-lock.*`), minified bundles, and media/binaries. Document only human-authored source files. Cap bulk scan at 50 core files.
- **Orphan cleanup**: Immediately delete companion doc when source file is deleted. Move/rename companion doc when source file is moved. Purge dead docs during `/allat` scans.
