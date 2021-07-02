//months & weekdays
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//query selector
const countDown = document.querySelector(".countdown");
const deadline = document.querySelector(".deadline");
const time = document.querySelectorAll(".container h4");
//datum invoeren

let futureDate = new Date(2021, 6, 9, 12, 00, 0);
// get functies

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
//text naar html

const futureTime = futureDate.getTime();
// function & berekening ms naar minuut/uur/dag
function getRemainingTime() {
  const today = new Date().getTime();
  const timer = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = timer / oneDay;
  days = Math.floor(days);

  //remainder berekenen zodat het niet dubbel komt
  let hours = Math.floor((timer % oneDay) / oneHour);
  let minutes = Math.floor((timer % oneHour) / oneMinute);
  let seconds = Math.floor((timer % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];
  // extra 0 erbij voor detail
  function format(time) {
    if (time < 10) {
      return (time = `0${time}`);
    }
    return time;
  }
  // text naar HTML
  time.forEach(function (time, index) {
    time.innerHTML = format(values[index]);
  });
}
//constant tick
let countdown = setInterval(getRemainingTime, 1000);
// init function
getRemainingTime();
