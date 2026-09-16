# i-aint-reading-allat

> **Plain-English codebase companion for vibe coders.**
> Zero syntax walls in chat. Real-world analogies. Full line references and complexity breakdowns maintained in a gitignored `i-aint-reading-allat/` directory.

---

## ⚡ Install

### Option A: The Vibe Coder 1-Prompt Install
Copy and paste this directly into your AI assistant prompt (Claude Code, Cursor, Antigravity, Codex):

```text
Install the i-aint-reading-allat skill from https://github.com/2cpk-fin/i-aint-reading-allat, refer to AGENTS.md for setup instructions.
```

### Option B: Interactive Terminal Setup
Run directly in your project root:

```bash
npx i-aint-reading-allat
```

It prompts you with 2 choices in your terminal:
```text
Choose code mastery level:
  1) Completely new  - Deep plain-English explanations, real-world analogies, zero syntax jargon
  2) Proficient      - Pseudo-code, architectural component breakdowns, Big-O complexity

Select choice [1 or 2]:
```

Switch anytime:
```bash
npx i-aint-reading-allat new         # Switch to Completely New
npx i-aint-reading-allat proficient  # Switch to Proficient
```

Or view complete platform instructions in [INSTALL.md](INSTALL.md).

---

## 🎯 What it does

When coding with an AI agent:
1. **Chat stays readable**: No walls of cryptic code dumped in your chat window. The agent summarizes features and bug fixes in plain English with direct action links.
2. **Automated Companion Docs**: The agent maintains a mirror of your codebase inside a gitignored `i-aint-reading-allat/` folder (e.g. `src/auth.ts` -> `i-aint-reading-allat/src/auth.md`).
3. **Exact Line References**: Every function, class, and variable is cited with exact line numbers (`Lines 42-68`) so you know where things live.
4. **Complexity in Human Terms**: Explains performance without dry math (e.g., *"Instantaneous"*, or *"Slows down if your cart exceeds 1,000 items"*).

---

## 🧠 Two Mastery Modes

Choose how you want your code explained. Switch anytime via `/allat mode` or `npx i-aint-reading-allat`.

### 1. Completely New (`new`)
Designed for non-developers, founders, and vibe coders:
- Real-world analogies (e.g., *"This function acts like a hotel receptionist taking luggage"*).
- Every variable explained by what it stores and why.
- Layman speed analysis (*"Runs in a split second"*).
- Step-by-step narrative flow.

### 2. Proficient (`proficient`)
Designed for developers learning an unfamiliar codebase quickly:
- High-level design patterns and architectural roles.
- Pseudo-code logic summaries instead of syntax details.
- Component contracts, side effects, and invariants.
- Formal Big-O time and space complexity.

---

## 📁 Sample Generated Doc (`i-aint-reading-allat/src/cart.md`)

```markdown
# Cart Manager in Plain English

**Original File:** `src/cart.ts`

## What this file does
Acts like a digital shopping cart register: handles adding products, calculating taxes, applying discounts, and tallying the checkout total.

## The Moving Parts (Functions & Classes)
- **`calculateTotal`** (Lines 42-68):
  - **In simple terms**: Adds up prices of all items in cart, checks if discount code is valid, and applies percentage off.
  - **What goes in**: List of cart items, optional promo code string.
  - **What comes out**: Final price in cents (e.g., 2999 = $29.99).

## What is Stored (State & Variables)
- **`activeCartItems`** (Line 14):
  - **What it holds**: List of products user has clicked "Add to Cart" on.
  - **Why it matters**: Remembers customer items until they purchase or close browser.

## Speed & Resource Usage (Performance)
- **How fast is it?**: Instantaneous. Even with 500 items, finishes in under 2 milliseconds.
```

---

## 🎮 Commands

| Command | Action |
| :--- | :--- |
| `/allat` | Scans project source files, purges orphaned docs, and updates companion docs. |
| `/allat <file>` | Generates or updates companion doc for a specific file. |
| `/allat clean` | Purges orphaned companion docs for deleted or moved files. |
| `/allat mode` | Prompts you to switch mastery mode (`new` vs `proficient`). |
| `/allat mode <new\|proficient>` | Switches mastery mode immediately. |
| `/allat status` | Checks current configuration and documented file count. |

---

## 🔒 Safe by Default

- Automatically adds `i-aint-reading-allat/` to your `.gitignore`.
- Does not modify your application code or bundle size.
- Companion files stay purely local.

---

## 📄 License

MIT
