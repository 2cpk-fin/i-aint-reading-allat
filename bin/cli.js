#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DOCS_DIR = path.join(process.cwd(), 'i-aint-reading-allat');
const CONFIG_FILE = path.join(DOCS_DIR, 'config.json');
const GITIGNORE_FILE = path.join(process.cwd(), '.gitignore');

function ensureGitignore() {
  if (fs.existsSync(GITIGNORE_FILE)) {
    const content = fs.readFileSync(GITIGNORE_FILE, 'utf8');
    if (!content.includes('/i-aint-reading-allat/')) {
      fs.appendFileSync(GITIGNORE_FILE, '\n# Plain-english companion docs\n/i-aint-reading-allat/\n');
    }
  } else {
    fs.writeFileSync(GITIGNORE_FILE, '# Plain-english companion docs\n/i-aint-reading-allat/\n');
  }
}

function ensureDir() {
  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }
}

function saveConfig(mastery) {
  ensureDir();
  ensureGitignore();
  fs.writeFileSync(CONFIG_FILE, JSON.stringify({ mastery }, null, 2) + '\n');
  console.log(`\n✓ Configured i-aint-reading-allat mastery level: ${mastery === 'new' ? 'Completely New' : 'Proficient'}`);
  console.log(`✓ Configuration saved to ${CONFIG_FILE}`);
  console.log(`✓ Ensured i-aint-reading-allat/ is gitignored\n`);
}

const arg = process.argv[2];
if (arg === 'new' || arg === '1') {
  saveConfig('new');
  process.exit(0);
} else if (arg === 'proficient' || arg === '2') {
  saveConfig('proficient');
  process.exit(0);
}

const currentConfig = fs.existsSync(CONFIG_FILE)
  ? JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'))
  : null;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\n--- i-aint-reading-allat Setup ---');
if (currentConfig && currentConfig.mastery) {
  console.log(`Current level: ${currentConfig.mastery === 'new' ? '1) Completely New' : '2) Proficient'}`);
}
console.log('Choose code mastery level:');
console.log('  1) Completely new  - Deep plain-English explanations, real-world analogies, zero syntax jargon');
console.log('  2) Proficient      - Pseudo-code, architectural component breakdowns, Big-O complexity\n');

rl.question('Select choice [1 or 2]: ', (answer) => {
  const trimmed = answer.trim();
  if (trimmed === '1') {
    saveConfig('new');
  } else if (trimmed === '2') {
    saveConfig('proficient');
  } else {
    console.log('Invalid choice. Defaulting to 1 (Completely new).');
    saveConfig('new');
  }
  rl.close();
});
