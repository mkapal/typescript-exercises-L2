const fruits = ["apple", "banana", "orange"] as const;

// Fix it so we get a TypeScript error
// if we try to access a non-existing array item
console.log(fruits[10]);