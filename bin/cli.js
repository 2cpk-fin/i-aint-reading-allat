#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DOCS_DIR = path.join(process.cwd(), 'i-aint-reading-allat');
const CONFIG_FILE = path.join(DOCS_DIR, 'config.json');
const GITIGNORE_FILE = path.join(process.cwd(), '.gitignore');

const VALID_LENGTHS = ['detailed', 'medium', 'tldr', 'extra_tldr'];

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

function readConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    } catch {
      return { mastery: 'new', length: 'detailed' };
    }
  }
  return { mastery: 'new', length: 'detailed' };
}

function saveConfig(updates) {
  ensureDir();
  ensureGitignore();
  const current = readConfig();
  const merged = { ...current, ...updates };
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(merged, null, 2) + '\n');
  console.log(`\n✓ Configured i-aint-reading-allat:`);
  console.log(`  - Mastery : ${merged.mastery === 'new' ? 'Completely New' : 'Proficient'}`);
  console.log(`  - Length  : ${merged.length}`);
  console.log(`✓ Saved to ${CONFIG_FILE}`);
  console.log(`✓ Ensured /i-aint-reading-allat/ is gitignored\n`);
}

// Handle non-interactive arguments
const cmd = process.argv[2];
const sub = process.argv[3];

if (cmd === 'new' || cmd === '1') {
  saveConfig({ mastery: 'new' });
  process.exit(0);
} else if (cmd === 'proficient' || cmd === '2') {
  saveConfig({ mastery: 'proficient' });
  process.exit(0);
} else if (cmd === 'length' || cmd === 'len') {
  const norm = sub ? sub.toLowerCase().replace('-', '_') : '';
  if (VALID_LENGTHS.includes(norm)) {
    saveConfig({ length: norm });
    process.exit(0);
  } else {
    console.error(`Invalid length. Choose one of: ${VALID_LENGTHS.join(', ')}`);
    process.exit(1);
  }
}

// Interactive wizard
const currentConfig = readConfig();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\n--- i-aint-reading-allat Setup ---');
console.log(`Current: Mastery = ${currentConfig.mastery || 'new'}, Length = ${currentConfig.length || 'detailed'}\n`);

console.log('1. Choose code mastery level:');
console.log('  1) Completely new - Plain English');
console.log('  2) Proficient     - Component breakdown');

rl.question('\nSelect choice [1 or 2, Enter to keep current]: ', (ansMastery) => {
  let selectedMastery = currentConfig.mastery || 'new';
  const trimmedM = ansMastery.trim();
  if (trimmedM === '1') selectedMastery = 'new';
  else if (trimmedM === '2') selectedMastery = 'proficient';

  console.log('\n2. Choose explanation length:');
  console.log('  1) Detailed   - Deepest: every component, variables, step-by-step narrative');
  console.log('  2) Medium     - Balanced: core exports, key components, concise flow');
  console.log('  3) TLDR       - Quick summary: 1-paragraph overview + main component list');
  console.log('  4) Extra TLDR - Ultra-compact: 3-5 bullet cheat-sheet (<10 lines per doc)');

  rl.question('\nSelect choice [1-4, Enter for detailed]: ', (ansLength) => {
    let selectedLength = 'detailed';
    const trimmedL = ansLength.trim();
    if (trimmedL === '1') selectedLength = 'detailed';
    else if (trimmedL === '2') selectedLength = 'medium';
    else if (trimmedL === '3') selectedLength = 'tldr';
    else if (trimmedL === '4') selectedLength = 'extra_tldr';
    else if (!trimmedL && currentConfig.length) selectedLength = currentConfig.length;

    saveConfig({ mastery: selectedMastery, length: selectedLength });
    rl.close();
  });
});
