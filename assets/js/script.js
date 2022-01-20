// current day 
var currentDayEl = document.querySelector("#currentDay");
var currentDay = moment().format("MMMM Do, YYYY");
currentDayEl.innerHTML = currentDay;