import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './obs/index.jsx',
    },
  },
  output: {
    filenameHash: false,
    distPath: {
      root: 'dist/obs',
    },
    copy: [{ from: 'manifest.json', to: '../manifest.json' }],
  },
});
