function displayTimezone(event) {
  let parisTime = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM D, YYYY h:mm A");
  let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D, YYYY h:mm A");

  if (event.target.value == "Paris") {
    alert(`It is ${parisTime} in Europe/Paris`);
  }

  if (event.target.value == "Tokyo") {
    alert(`It is ${tokyoTime} in Asia/Tokyo`);
  }

  if (event.target.value == "Sydney") {
    alert(`It is ${sydneyTime} in Australia/Sydney`);
  }
}

let showTime = document.querySelector("#country");
showTime.addEventListener("change", displayTimezone);
