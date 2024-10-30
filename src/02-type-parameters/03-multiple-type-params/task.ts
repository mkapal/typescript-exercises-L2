// Get value from an object by its key
const name = getObjectValue(
  {
    id: 2,
    name: "Peter",
  },
  "name",
);

// This should show a TypeScript error
const invalidValue = getObjectValue(
  {
    id: 2,
    name: "Peter",
  },
  "invalidKey",
);
