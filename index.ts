import * as fs from 'fs';
import * as babelParser from '@babel/parser';

const code = fs.readFileSync('sample/one.ts', 'utf-8');
const parsed = babelParser.parse(code, {
  sourceType: 'module',
});

console.log(code);
console.log(parsed);
