/* eslint-disable prefer-const */

let a: { list: number[] };
const b = { list: ["1"] };

// Explain the TypeScript error
a = b;
