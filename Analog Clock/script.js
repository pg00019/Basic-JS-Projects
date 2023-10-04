// alert("watch")

// function ShowTime() {
  // let hour =document.querySelector("#hour");
  // let minutes =document.querySelector("#minutes");
  // let seconds =document.querySelector("#seconds");
setInterval( ()=>{
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hrRotation = 30*hr + min/2;
    minRotation = 6*min;
    secRotation = 6*sec;

    hour.style.transform = `rotate(${hrRotation}deg)`;
    minutes.style.transform = `rotate(${minRotation}deg)`;
    seconds.style.transform = `rotate(${secRotation}deg)`;
})
  



// }

// hour hand -> will rotate (30h + m/2)
// minutes hand -> will rotate (6m)
// seconds hand -> will rotate (6s)
