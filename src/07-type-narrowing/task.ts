function logPresence(isPresent: boolean | null) {
  if (isPresent) {
    console.log("is present");
  } else {
    console.log("is not present");

    // Which type is `isPresent` at this point?
    console.log(isPresent);
  }
}
