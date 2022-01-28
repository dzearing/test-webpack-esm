import path from 'path';
import { fileURLToPath } from 'url';

const currentPath = path.dirname(fileURLToPath(import.meta.url));

const config = {
  entry: './utilities.js',
  mode: 'production',
  target: ['web', 'es2020'],
  experiments: {
    outputModule: true
  },
  output: {
    path: path.resolve(currentPath, 'dist'),
    filename: 'utilities.js',
    library: {
      type: 'module'
    }
  },
  externalsType: 'module',
  externals: {
    '@fluentui/utilities': {
      module: '@fluentui/utilities'
    }
  }
};


export default config;