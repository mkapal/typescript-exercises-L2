function processData(data: any): void {
  console.log("Uppercased:", data.toUpperCase());
  console.log("Doubled:", data * 2);
}

// Test cases
processData("Hello"); // Works fine
processData(10); // Might throw an error on `toUpperCase`
processData({ value: 5 }); // Errors on both operations

// Part 2: Using `unknown`
function processDataUnknown(data: unknown): void {
  if (typeof data === "string") {
    console.log("Uppercased:", data.toUpperCase());
  } else if (typeof data === "number") {
    console.log("Doubled:", data * 2);
  } else {
    console.log("Unsupported data type");
  }
}

// Test cases
processDataUnknown("Hello"); // Works fine
processDataUnknown(10); // Works fine
processDataUnknown({ value: 5 }); // Outputs "Unsupported data type"
