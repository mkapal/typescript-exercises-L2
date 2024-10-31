function getObjectValue<
  TRecord extends Record<string, unknown>,
  TKey extends keyof TRecord,
>(record: TRecord, key: TKey): TRecord[TKey] {
  return record[key];
}

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