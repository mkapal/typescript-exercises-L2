function reverseArray<TItem>(arr: TItem[]): TItem[] {
  return arr.reverse();
}

const originalArray = [1, "a", "b", true];
console.log("original array", originalArray);

const reversedArray = reverseArray(originalArray);

// Original array should remain unchanged
console.log("reversed array", originalArray);
console.log("original array", reversedArray);

// This should work
console.log(reverseArray(["a", "b", "c"]).map((item) => item.toUpperCase()));

// This should throw an error
console.log(reverseArray([1, 2, 3]).map((item) => item.toUpperCase()));
