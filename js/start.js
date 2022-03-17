function digitalClock() {

  var time = new Date();

  var hours = time.getHours();
  var minutes = time.getMinutes();

  var amPm = (hours < 12) ? "AM" : "PM";

  hours = (hours > 12) ? hours - 12 : hours;

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);

  document.querySelector('.digitalTime').innerHTML =
    hours + ":" + minutes + " " + amPm;

  setTimeout(digitalClock, 500);
}

function analogClock() {
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  var now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  setTimeout(analogClock, 500);
}

