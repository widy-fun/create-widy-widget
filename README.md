# create-widy-widget

A CLI tool to scaffold a Widy widget project from templates.

## What it does

`create-widy-widget` prompts for a project name, framework, and language variant, then copies the matching template into a new project folder and generates a basic `manifest.json`.

## Install

```bash
npm install -g create-widy-widget
```

Or run locally with `npx`:

```bash
npx create-widy-widget
```

## Usage

```bash
create-widy-widget
```

Then follow the prompts:

- Project name
- Framework (`React`)
- Variant (`TypeScript` or `JavaScript`)

After scaffolding, run:

```bash
cd <project-name>
npm install
npm run build
```

Add `dist` folder to the Widy app in widgets "Add widget".

## Release

- Fork `https://github.com/widy-fun/widgets`.
- Add your generated widget project to the fork's `widgets` folder.
- Ensure the widget's `manifest.json` contains a unique `id`.
- Add the widget manifest entry with the unique widget id to `widgets.json` in the fork.

## Templates

The generator uses templates stored under `templates/react`:

- `js` — JavaScript React widget template
- `ts` — TypeScript React widget template

## Requirements

- Node.js 16+
- npm

## Notes

- The CLI creates a `manifest.json` in the scaffolded project root.
- The tool currently supports only the React framework.
