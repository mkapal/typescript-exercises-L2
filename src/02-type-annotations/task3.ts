// Add correct type annotations so it doesn't show errors

function callDate(callback) {
  callback(new Date());
}

callDate((date) => {
  console.log(date);
});
