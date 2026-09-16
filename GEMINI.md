# i-aint-reading-allat for Gemini / Antigravity

This project uses `i-aint-reading-allat` to maintain plain-English companion documentation.

## Core Rules

1. Keep raw code out of chat responses unless explicitly requested by the user.
2. Maintain mirror markdown docs in `i-aint-reading-allat/<path>.md` for structural changes only (new/changed functions, classes, state). Skip sync for typos and formatting.
3. Check `i-aint-reading-allat/config.json` for mastery mode (`new` or `proficient`). If missing, prompt user to select.
4. Ensure `/i-aint-reading-allat/` is listed in `.gitignore`.
5. Filter files: Skip `.gitignore` paths, dependencies (`node_modules`, `vendor`), builds (`dist`, `.next`), lockfiles, and media. Document human-authored source files only. Cap scan at 50 core files.
6. Orphan cleanup: Delete companion doc if source file is deleted. Move/rename doc if source file is moved. Prune stale docs on full scan.
