setInterval(() => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (hour == 01 && minutes == 05 && seconds == 40) {
    let audio = new Audio("alarmTune.mp3");
    let message = "Hello! Sir";
    document.querySelector(".message").innerHTML = "Hello! Sir";
    audio.play();
  }
}, 1000);
