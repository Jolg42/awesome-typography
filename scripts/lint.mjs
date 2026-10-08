import {fileURLToPath} from 'node:url';
import lint from 'awesome-lint/index.js';

await lint.report({
  filename: fileURLToPath(new URL('../README.md', import.meta.url)),
  repoURL: 'https://github.com/Jolg42/awesome-typography',
});
