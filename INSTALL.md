# Installation Guide

You can install `i-aint-reading-allat` via agent prompt, interactive terminal CLI, or manual plugin commands.

---

## ⚡ 1-Prompt Install (Recommended for Vibe Coders)

Copy and paste this single line directly into your AI assistant prompt (Claude Code, Cursor, Codex, Antigravity):

```text
Install the i-aint-reading-allat skill from https://github.com/2cpk-fin/i-aint-reading-allat, refer to AGENTS.md for setup instructions.
```

Your agent will configure `.gitignore`, prompt you for your code mastery level, and activate the skill.

---

## 💻 Interactive Terminal Setup

Run directly in your project root using Node:

```bash
npx i-aint-reading-allat
```

It prompts you with 2 quick questions:
```text
1. Choose code mastery level:
  1) Completely new - Plain English
  2) Proficient     - Component breakdown

2. Choose explanation length:
  1) Detailed   - Deepest: every component, variables, step-by-step narrative
  2) Medium     - Balanced: core exports, key components, concise flow
  3) TLDR       - Quick summary: 1-paragraph overview + main component list
  4) Extra TLDR - Ultra-compact: 3-5 bullet cheat-sheet (<10 lines per doc)
```

This saves your choices to `i-aint-reading-allat/config.json` and ensures `/i-aint-reading-allat/` is in `.gitignore`.

To switch anytime via terminal:
```bash
npx i-aint-reading-allat new            # Switch mastery
npx i-aint-reading-allat length tldr    # Switch length (detailed|medium|tldr|extra_tldr)
```

---

## 🛠️ Platform-Specific Setup

<details>
<summary><strong>Claude Code</strong></summary>

### Install
```bash
claude plugin marketplace add 2cpk-fin/i-aint-reading-allat
claude plugin install i-aint-reading-allat@i-aint-reading-allat
```

### Verify
```bash
claude plugin list
```

### Activate
Type `/allat` in Claude Code.
</details>

<details>
<summary><strong>Antigravity (<code>agy</code>)</strong></summary>

### Install
```bash
agy plugin install https://github.com/2cpk-fin/i-aint-reading-allat
```

### Verify
```bash
agy plugin list
```
</details>

<details>
<summary><strong>Cursor</strong></summary>

Copy the skill to your workspace rules:
```bash
mkdir -p .cursor/skills/i-aint-reading-allat
curl -s https://raw.githubusercontent.com/2cpk-fin/i-aint-reading-allat/main/skills/i-aint-reading-allat/SKILL.md > .cursor/skills/i-aint-reading-allat/SKILL.md
```
Or use the skills CLI:
```bash
npx skills add 2cpk-fin/i-aint-reading-allat -a cursor
```
</details>

<details>
<summary><strong>Codex</strong></summary>

### Install
```bash
codex plugin marketplace add 2cpk-fin/i-aint-reading-allat --ref main
codex plugin add i-aint-reading-allat@i-aint-reading-allat
```

### Activate
Type `$allat` in chat.
</details>

---

## 🔄 Switching Settings Anytime

In chat with your AI:
- `/allat mode`: Re-prompts the 2-choice mastery question.
- `/allat mode <new|proficient>`: Sets mastery immediately.
- `/allat length`: Re-prompts the 4-choice length tier question.
- `/allat length <detailed|medium|tldr|extra_tldr>`: Sets length immediately.
