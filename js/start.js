/*function digitalClock() {

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
*/

function analogClock() {
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  var city = document.querySelector('#cityName');
  var cityName = localStorage.getItem('selectedCity');
  city.innerHTML = JSON.parse(cityName);

  var now = luxon.DateTime.now();

  if (city.innerHTML == "Algiers") {
    now = luxon.DateTime.now().setZone("Africa/Algiers")
  } else if (city.innerHTML == "Berlin") {
    now = luxon.DateTime.now().setZone("Europe/Berlin")
  } else if (city.innerHTML == "Denver") {
    now = luxon.DateTime.now().setZone("America/New_York")
  } else if (city.innerHTML == "Dubai") {
    now = luxon.DateTime.now().setZone("Asia/Dubai")
  } else if (city.innerHTML == "Helsinki") {
    now = luxon.DateTime.now().setZone("Europe/Helsinki")
  } else if (city.innerHTML == "Honolulu") {
    now = luxon.DateTime.now().setZone("Pacific/Honolulu")
  } else if (city.innerHTML == "Istanbul") {
    now = luxon.DateTime.now().setZone("Asia/Istanbul")
  } else if (city.innerHTML == "Jakarta") {
    now = luxon.DateTime.now().setZone("Asia/Jakarta")
  } else if (city.innerHTML == "Jerusalem") {
    now = luxon.DateTime.now().setZone("Asia/Jerusalem")
  } else if (city.innerHTML == "London") {
    now = luxon.DateTime.now().setZone("Europe/London")
  } else if (city.innerHTML == "Melbourne") {
    now = luxon.DateTime.now().setZone("Australia/Melbourne")
  } else if (city.innerHTML == "Nairobi") {
    now = luxon.DateTime.now().setZone("Africa/Nairobi")
  } else if (city.innerHTML == "New York") {
    now = luxon.DateTime.now().setZone("America/New_York")
  } else if (city.innerHTML == "Paris") {
    now = luxon.DateTime.now().setZone("Europe/Paris")
  } else if (city.innerHTML == "Stockholm") {
    now = luxon.DateTime.now().setZone("Europe/Stockholm")
  } else if (city.innerHTML == "Singapore") {
    now = luxon.DateTime.now().setZone("Asia/Singapore")
  } else if (city.innerHTML == "Timbuktu") {
    now = luxon.DateTime.now().setZone("Africa/Timbuktu")
  } else if (city.innerHTML == "Vienna") {
    now = luxon.DateTime.now().setZone("Europe/Vienna")
  } else if (city.innerHTML == "Qatar") {
    now = luxon.DateTime.now().setZone("Asia/Qatar")
  } else if (city.innerHTML == "Yukon") {
    now = luxon.DateTime.now().setZone("Canada/Yukon")
  }

  const seconds = now.second;
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.minute;
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.hour;
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  //DIGITAL
  var hours = now.hour;
  var minutes = now.minute;

  var amPm = (hours < 12) ? "AM" : "PM";

  hours = (hours > 12) ? hours - 12 : hours;

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);

  document.querySelector('.digitalTime').innerHTML =
    hours + ":" + minutes + " " + amPm;

  setTimeout(analogClock, 500);
}

function changeCity() {
  const selected = document.querySelector('.selectedCity');
  const optionsList = document.querySelectorAll('.option');

  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector('label').innerHTML;

      localStorage.setItem('selectedCity', JSON.stringify(selected.innerHTML));

      // Ändra tiden på startsidan till vald stad

      window.location.assign('/');

    });
  });
}

