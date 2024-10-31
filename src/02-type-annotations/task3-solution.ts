function callDate(callback: (date: Date) => void) {
  callback(new Date());
}

callDate((date) => {
  console.log(date);
});
