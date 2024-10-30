export const fruits = ["apple", "banana", "orange"] as const;

// Fix the type of Fruit so it becomes
// a union type of all values in fruits array
// Something like this but dynamic:
// type Fruit = 'apple' | 'banana' | 'orange';

type Fruit = (typeof fruits)[number];