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

It will prompt:
```text
Choose code mastery level:
  1) Completely new  - Deep plain-English explanations, real-world analogies, zero syntax jargon
  2) Proficient      - Pseudo-code, architectural component breakdowns, Big-O complexity

Select choice [1 or 2]:
```

This saves your choice to `i-aint-reading-allat/config.json` and ensures `i-aint-reading-allat/` is in `.gitignore`.

To switch modes anytime via terminal:
```bash
npx i-aint-reading-allat new         # Switch to Completely New
npx i-aint-reading-allat proficient  # Switch to Proficient
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

## 🔄 Switching Mastery Levels Anytime

In chat with your AI:
- `/allat mode`: Re-prompts the 2-choice mastery question.
- `/allat mode new`: Sets mastery to Completely New.
- `/allat mode proficient`: Sets mastery to Proficient.
