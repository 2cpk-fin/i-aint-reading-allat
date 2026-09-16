---
name: i-aint-reading-allat
description: 'Translates codebases into plain-English companion documentation inside a gitignored i-aint-reading-allat/ directory for vibe coders and learners. Supports two code mastery modes: Completely New and Proficient. Invoke with /allat.'
disable-model-invocation: false
license: MIT
metadata:
  tags: "Documentation, Explainer, Vibe Coding, Beginner-Friendly, Plain English"
  category: "productivity"
---

# i-aint-reading-allat

Companion skill for vibe coders, non-developers, and learners who want to build and understand software without deciphering syntax or reading raw code dumps.

Maintains a gitignored `i-aint-reading-allat/` directory containing mirror documentation of the codebase in plain English, complete with line references, variable maps, real-world analogies, and complexity breakdowns.

---

## 1. Code Mastery Modes

The skill operates in one of two modes stored in `i-aint-reading-allat/config.json`:

```json
{
  "mastery": "new",
  "length": "detailed"
}
```

### Modes Breakdown

| Mode | Key Audience | Tone & Style | Complexity |
| :--- | :--- | :--- | :--- |
| **`new` (Completely New)** | Vibe coders, founders, non-technical builders | Deep plain English, real-world analogies, narrative walkthroughs, zero technical jargon. | Layman terms: *"Instant"*, *"Takes 2 seconds with 1,000 items"*. |
| **`proficient` (Proficient)** | Developers exploring unfamiliar codebases | Clean pseudo-code, architectural contracts, design patterns, component interactions. | Formal Big-O: *O(1)*, *O(N log N)*, time & space metrics. |

### Initialization & Switching

1. **First-run prompt**:
   Whenever the skill is invoked and `i-aint-reading-allat/config.json` does not exist, ask the user immediately:
   > "Choose your code mastery level:
   > 1. **Completely New**: Plain English
   > 2. **Proficient**: Component breakdown
   > You can switch this at any time."
   Save choice (`{"mastery": "new", "length": "detailed"}` or `{"mastery": "proficient", "length": "detailed"}`) into `i-aint-reading-allat/config.json`.

2. **Switching mode**:
   - `/allat mode`: Prompts the user to toggle mode.
   - `/allat mode new`: Immediately sets mastery to Completely New.
   - `/allat mode proficient`: Immediately sets mastery to Proficient.
   - When mode changes, prompt user if they want existing files in `i-aint-reading-allat/` regenerated in the new style.

---

## 2. Documentation Length Tiers

Documentation volume is controlled by the `length` setting in `i-aint-reading-allat/config.json`:

| Tier | Scope & Depth | Target Doc Size |
| :--- | :--- | :--- |
| **`detailed`** (Default) | Full schema: all functions, classes, state variables, line ranges, step-by-step flow narratives, edge cases. | Complete deep dive (30-80 lines) |
| **`medium`** | Balanced: high-level story, public/exported components only, key state, concise speed summary. Skips private helpers and lengthy step sequences. | Moderate summary (15-30 lines) |
| **`tldr`** | Compact: 1-paragraph overview, bulleted list of main exports (`name` (Lines X-Y) - 1 sentence), 1-line speed note. | Quick reference (8-15 lines) |
| **`extra_tldr`** | Ultra-compact cheat-sheet: 3-5 bullet points total. What it does, primary entrypoint + lines, performance. | Cheat-sheet (< 10 lines) |

### Switching Length Tier
- `/allat length`: Prompts user to choose length tier (`detailed`, `medium`, `tldr`, `extra_tldr`).
- `/allat length <detailed|medium|tldr|extra_tldr>`: Switches length tier immediately.
- `/allat length extra-tldr` (hyphen or underscore accepted).

---

## 3. Directory & Git Safety

Before writing any documentation:
1. Check `.gitignore` in the project root.
2. If `/i-aint-reading-allat/` is not listed, automatically append:
   ```gitignore
   # Plain-english companion docs
   /i-aint-reading-allat/
   ```
3. Never commit or stage files inside `i-aint-reading-allat/`.

---

## 4. Exclusion & Source Filter Rules

`/allat` must NEVER attempt to document dependencies, build artifacts, lockfiles, or media. Filter files with these strict rules:

1. **Honor `.gitignore`**: Any file or directory ignored by git is automatically skipped.
2. **Directory blocklist**:
   - Dependencies: `node_modules/`, `vendor/`, `.venv/`, `venv/`, `env/`, `__pycache__/`, `Pods/`, `target/`.
   - Build outputs: `dist/`, `build/`, `out/`, `.next/`, `.nuxt/`, `.turbo/`, `coverage/`, `.cache/`, `.parcel-cache/`.
   - Tooling & VCS: `.git/`, `.github/`, `.cursor/`, `.vscode/`, `.idea/`, `i-aint-reading-allat/`.
3. **Excluded files & extensions**:
   - Lockfiles: `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lockb`, `Cargo.lock`, `poetry.lock`, `composer.lock`.
   - Minified / bundles: `*.min.js`, `*.min.css`, `*.map`, `*.bundle.js`.
   - Media & binaries: Images (`.png`, `.jpg`, `.svg`, `.ico`, `.webp`), audio/video, fonts (`.woff`, `.woff2`, `.ttf`), executables, `.wasm`, `.pdf`.
   - Databases & logs: `*.sqlite`, `*.db`, `*.log`.
4. **Target source files only**: Process human-authored code files (`.ts`, `.tsx`, `.js`, `.jsx`, `.py`, `.go`, `.rs`, `.rb`, `.php`, `.java`, `.c`, `.cpp`, `.cs`, `.swift`, `.kt`, `.vue`, `.svelte`, `.sql`, etc.).
5. **Safety ceiling**: If repository contains more than 50 source files, `/allat` must document primary entry points first (e.g. `src/` core modules) and ask the user before scanning remaining directories to avoid unbounded token spend.

---

## 5. Documentation File Schema & Length Adaptations

For every source file in the project, create or update a corresponding file in `i-aint-reading-allat/` mirroring the directory structure:
- `src/services/billing.ts` -> `i-aint-reading-allat/src/services/billing.md`
- `app/api/auth/route.js` -> `i-aint-reading-allat/app/api/auth/route.md`

### Schema Adaptation by Length Tier
- **`detailed`**: Full schema below (all components, line ranges, parameters, step-by-step narratives, variables, performance, edge cases).
- **`medium`**: Overview, public/exported components only, key state, concise speed summary. Skips private helpers and lengthy step sequences.
- **`tldr`**: 1-paragraph overview, bulleted list of main exports (`name` (Lines X-Y) - 1-sentence job), 1-line speed note.
- **`extra_tldr`**: 3-5 bullet points total (<10 lines per doc): Role, primary entry point + lines, speed rating.

### Schema for `new` Mode (Completely New)

```markdown
# [File Name] in Plain English

**Original File:** `[relative/path/to/file]`

## What this file does
A plain-English story describing the file's job. Use a real-world analogy (e.g., "This file acts like a bouncer at a club door: checking IDs before letting anyone inside").

## The Moving Parts (Functions & Classes)
- **`functionName`** (Lines X-Y):
  - **In simple terms**: What this does in plain English.
  - **What goes into it**: Plain description of input parameters.
  - **What happens inside**: Step-by-step narrative of the actions taken.
  - **What comes out**: What it returns or updates.

## What is Stored (State & Variables)
- **`variableName`** (Line Z):
  - **What it holds**: Human explanation of the data.
  - **Why it matters**: Why the application needs to remember this.

## Speed & Resource Usage (Performance)
- **How fast is it?**: Layman assessment (e.g., "Instantaneous. Even with 10,000 users, it takes less than a blink").
- **Heavy lifting**: Any potential bottlenecks described simply (e.g., "Uploading 50MB files will pause this for a few seconds").

## Step-by-Step Flow
1. User does X ->
2. File receives data and verifies Y ->
3. Result Z is saved to database.
```

### Schema for `proficient` Mode (Proficient)

```markdown
# [File Name] Architectural Overview

**Original File:** `[relative/path/to/file]`

## Role & Design Pattern
High-level architectural responsibility, patterns used (e.g., Repository, Singleton, Pub/Sub), and upstream/downstream dependencies.

## Component Specifications
- **`ClassName / functionName`** (Lines X-Y):
  - **Contract**: Signature, inputs, return types, exceptions thrown.
  - **Algorithm / Pseudo-code**:
    ```text
    RECEIVE request
    VALIDATE token
    IF valid THEN fetch record FROM db ELSE abort 401
    RETURN sanitized payload
    ```
  - **Side effects**: Database writes, network calls, cache mutations.

## State & Invariants
- **`variableName`** (Line Z):
  - Invariant rules, lifecycle, concurrency considerations.

## Complexity Analysis
- **Time Complexity**: *O(N)* average, *O(N^2)* worst-case. Explanation of loop bounds.
- **Space Complexity**: *O(1)* auxiliary space.

## Edge Cases & Error Handling
- Handled conditions: Network timeout, malformed payload, missing environment keys.
- Unhandled edge cases: Race conditions on concurrent writes.
```

### Technical Fidelity Guardrails (No Lossy Summaries)

Every generated document must preserve technical correctness without silent omissions:
1. **Exact formulas**: Document mathematical expressions with exact scaling and precision (e.g. state `round(* 100.0) / 100.0` for 2 decimal places; never describe it as basic rounding).
2. **Exhaustive branch conditions**: If logic branches on multiple `OR` / `AND` criteria (e.g. worker tier triggered by `yield >= 50 || weight >= 100 || occurrence >= 50000`), document every condition. Never drop alternative trigger paths.
3. **Method-level line ranges**: Cite line ranges for each individual function or method. Do not lump entire `impl` blocks, interfaces, or classes into a single method citation.
4. **Complete match / reject lists**: Never silently trim filter strings, extensions, or status codes in pseudo-code. State the complete set or use explicit count notation (`[...and 4 more]`).

---

## 6. Chat Communication Rules

When this skill is active:
1. **Never dump raw code into chat**: Vibe coders cannot or do not want to read syntax.
2. **Describe changes in plain English**: Explain what feature was added, what bug was fixed, or what changed behaviorally.
3. **Reference lines and link docs**: Provide clickable links to the source lines and the matching companion doc in `i-aint-reading-allat/`.
4. **Give direct verification instructions**: Tell the user what command to run (e.g. `npm run dev`) and what to click/observe in the browser to confirm it works.

---

## 7. Commands

- `/allat`: Scans project source files (excluding dependencies, build outputs, media, lockfiles), purges orphaned docs, and generates companion docs. Caps at 50 core files before requesting approval.
- `/allat <file-path>`: Generates or updates documentation for a specific file.
- `/allat clean`: Removes orphaned companion docs whose original source files were deleted or moved.
- `/allat mode`: Checks or switches current mastery mode (`new` vs `proficient`).
- `/allat mode <new|proficient>`: Switches mastery mode immediately.
- `/allat length`: Checks or switches current length tier (`detailed`, `medium`, `tldr`, `extra_tldr`).
- `/allat length <detailed|medium|tldr|extra_tldr>`: Switches length tier immediately.
- `/allat status`: Displays current configuration (mastery and length), total documented files, and detected source files.

---

## 8. Smart Sync Rule (No Wasteful Regens)

Do NOT regenerate full documentation on every small edit. Follow these thresholds:

1. **Trigger only on structural changes**:
   - **Sync when**: New file created, new function/class added, signature/parameters changed, state variable added/deleted, or core behavior changed.
   - **Skip sync when**: Typo fixes, formatting/whitespace, comments, internal variable renaming, or minor bug fixes that preserve the component's plain-English purpose.
2. **Surgical patch over full rewrite**:
   - If only one function changed in a 500-line file, update only that function's entry in `i-aint-reading-allat/<path>.md`. Never rewrite the entire document for a localized change.
   - If line numbers shifted slightly without logic changes, leave the document as-is until the next `/allat` scan.
3. **Batch at task completion**:
   - In multi-file tasks, do not update docs after every intermediate edit. Update relevant companion docs once at the end of the turn.

---

## 9. Lifecycle: Deletions, Renames & Orphan Cleanup

Never leave stale documentation for non-existent code. Maintain strict 1:1 parity:

1. **On source deletion**:
   - When deleting a source file (e.g. `src/legacy.ts`), immediately delete `i-aint-reading-allat/src/legacy.md`.
   - Prune any empty parent directories left inside `i-aint-reading-allat/`.
2. **On source rename or move**:
   - When renaming or moving a file (e.g. `src/auth.ts` -> `src/services/auth.ts`), move and rename the companion file (`i-aint-reading-allat/src/auth.md` -> `i-aint-reading-allat/src/services/auth.md`).
   - Update relative path citations inside the markdown document.
3. **Orphan sweep**:
   - `/allat` and `/allat clean` automatically traverse `i-aint-reading-allat/` and delete any `.md` file that no longer maps to an existing source file.


