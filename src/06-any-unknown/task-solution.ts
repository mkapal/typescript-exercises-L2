function processDataUnknown(data: unknown): void {
  if (typeof data === "string") {
    console.log("Uppercased:", data.toUpperCase());
  } else if (typeof data === "number") {
    console.log("Doubled:", data * 2);
  } else {
    console.log("Unsupported data type");
  }
}

processDataUnknown("Hello");
processDataUnknown(10);
processDataUnknown({ value: 5 });
