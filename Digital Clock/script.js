
// Get the HTML element
let clock = document.querySelector(".clock");
// initialize the meridiem
let Meridiem = "AM";

// function to show the time on the web page
function showTime() {
  // using Date object to create new instance of time
  let time = new Date();
  // extract the hour
  let hour = time.getHours();
// extract the minutes
  let minutes = time.getMinutes();
  // extract the seconds
  let seconds = time.getSeconds();

  // convert into 12hour 
  if (hour === 00) {
    hour = 12;
    Meridiem = "AM";
  }
  else if (hour === 12) {
      Meridiem = "PM";
  } 
  else if ( hour >=12){
    hour = hour - 12;
    Meridiem = "PM"
  } 

  // if the time is in single digit then add a "0" before the single digit number
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // make the clock dynamic
  setTimeout(function () {
    showTime();
  }, 1000);

  // display  the time in HH:MM:SS format 
  clock.innerHTML = `${hour} : ${minutes} : ${seconds} ${Meridiem}`;
}

// call the function 
showTime();







