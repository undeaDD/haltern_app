import { mkdirSync, writeFileSync } from 'node:fs';
import { buildPage } from './page.js';

mkdirSync('dist', { recursive: true });
writeFileSync('dist/index.html', buildPage());

console.log('Built → dist/index.html');
