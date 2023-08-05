import * as fs from 'fs';
import * as babelParser from '@babel/parser';

const code = fs.readFileSync('sample/one.ts', 'utf-8');
const parsed = babelParser.parse(code, {
  sourceType: 'module',
});

console.log(code);
console.log(parsed);

// output of parsed
// Node {
//   type: 'File',
//   start: 0,
//   end: 65,
//   loc: SourceLocation {
//     start: Position { line: 1, column: 0, index: 0 },
//     end: Position { line: 5, column: 0, index: 65 },
//     filename: undefined,
//     identifierName: undefined
//   },
//   errors: [],
//   program: Node {
//     type: 'Program',
//     start: 0,
//     end: 65,
//     loc: SourceLocation {
//       start: [Position],
//       end: [Position],
//       filename: undefined,
//       identifierName: undefined
//     },
//     sourceType: 'module',
//     interpreter: null,
//     body: [ [Node], [Node], [Node] ],
//     directives: []
//   },
//   comments: []
// }
