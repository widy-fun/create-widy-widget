#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const prompts = require('prompts');
const { green, cyan } = require('kolorist');


const FRAMEWORKS = [
  {
    name: 'react',
    display: 'React',
    color: cyan,
  },
];

const VARIANTS = [
  {
    name: 'ts',
    display: 'TypeScript',
    color: green,
  },
  {
    name: 'js',
    display: 'JavaScript',
    color: cyan,
  },
 
];

async function init() {
  let result = {};

  try {
    result = await prompts([
      {
        type: 'text',
        name: 'projectName',
        message: 'Project name:',
        initial: 'widy-widget'
      },
      {
        type: 'select',
        name: 'framework',
        message: 'Select a framework:',
        choices: FRAMEWORKS.map((f) => ({
          title: f.color(f.display),
          value: f.name
        }))
      },
      {
        type: 'select',
        name: 'language',
        message: 'Select a variant:',
        choices: VARIANTS.map((f) => ({
          title: f.color(f.display),
          value: f.name
        }))
      }
    ]);
  } catch (cancelled) {
    console.log(cancelled.message);
    return;
  }

  const { projectName, framework,language } = result;

  const manifest= {
    "manifest_version": 1,
    "id": projectName,
    "name": projectName,
    "version": "1.0.0",
    "authors": [],
    "description": "",
    "repository": "",
    "scopes": [],
    "connect_src": [],

};

  const root = path.join(process.cwd(), projectName);
  const templateDir = path.resolve(__dirname, 'templates', framework,language);
  const manifestPath = path.resolve(root, 'manifest.json');

  if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true });
  }

  fs.writeFileSync(manifestPath,JSON.stringify(manifest));

  console.log(`\nScaffolding project in ${root}...`);

  const copy = (src, dest) => {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      for (const file of fs.readdirSync(src)) {
        copy(path.resolve(src, file), path.resolve(dest, file));
      }
    } else {
      fs.copyFileSync(src, dest);
    }
  };

  copy(templateDir, root);

  console.log(`\nDone. Now run:\n`);
  console.log(green(`  cd ${projectName}`));
  console.log(green(`  npm install`));
  console.log(green(`  npm run dev\n`));
}

init().catch(console.error);