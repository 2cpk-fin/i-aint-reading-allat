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

It prompts you with 2 quick questions in your terminal:
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

Switch anytime:
```bash
npx i-aint-reading-allat new            # Switch mastery
npx i-aint-reading-allat length tldr    # Switch length (detailed|medium|tldr|extra_tldr)
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

## 📏 4 Length Tiers

Control how verbose your companion docs are (`detailed > medium > TLDR > extra TLDR`):

| Length Tier | What you get | Output Size |
| :--- | :--- | :--- |
| **`detailed`** (Default) | Full deep dive: every class/function, exact line ranges, input/output walkthroughs, variables, step narratives, edge cases. | ~30-80 lines |
| **`medium`** | Balanced: high-level story, public/exported components only, key state variables, concise speed note. Skips private helper details. | ~15-30 lines |
| **`tldr`** | Compact summary: 1-paragraph overview, bulleted list of main exports with 1-sentence descriptions, 1-line speed note. | ~8-15 lines |
| **`extra_tldr`** | Ultra-compact cheat-sheet: 3-5 bullet points total (file job, main entrypoint + line range, speed). | < 10 lines |

Switch anytime via `/allat length <tier>` or `npx i-aint-reading-allat length <tier>`.

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
| `/allat length` | Prompts you to switch length tier. |
| `/allat length <tier>` | Switches length immediately (`detailed`, `medium`, `tldr`, `extra_tldr`). |
| `/allat status` | Checks current configuration (mastery and length) and documented file count. |

---

## 🔒 Safe by Default

- Automatically adds `i-aint-reading-allat/` to your `.gitignore`.
- Does not modify your application code or bundle size.
- Companion files stay purely local.

---

## 📄 License

MIT
