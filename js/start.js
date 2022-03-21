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

function openDetailWindow() {
  var detailWindow = document.querySelector('.detailWindow');
  var cityButton = document.querySelector('.city');
  var span = document.getElementsByClassName("close")[0];

  var cityName = document.querySelector('.detailCityName');
  var cityDetails = document.querySelector('.cityDetails');
  var cityPopulation = document.querySelector('.cityPopulation');
  var detailContent = document.querySelector('.detailContent');

  var currentCity = JSON.parse(localStorage.getItem('selectedCity'));

  cityName.innerHTML = currentCity;

  if (currentCity == "Stockholm") {
    cityDetails.innerHTML = "Stockholm is the capital and largest city of Sweden as well as the largest urban area in Scandinavia.";
  } else if (currentCity == "Algiers") {
    cityDetails.innerHTML = "Algiers is the capital and largest city of Algeria";
    cityPopulation.innerHTML = "Population: 7,896 millon";
  } else if (currentCity == "Berlin") {
    cityDetails.innerHTML = "Berlin  is the capital and largest city of Germany by both area and population.";
    cityPopulation.innerHTML = "Population: 3,645 millon";
  } else if (currentCity == "Denver") {
    cityDetails.innerHTML = "Denver is a consolidated city and county, the capital, and most populous city of the U.S. state of Colorado.";
    cityPopulation.innerHTML = "Population: 705 576";
  } else if (currentCity == "Dubai") {
    cityDetails.innerHTML = "Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai.";
    cityPopulation.innerHTML = "Population: 3,331 millon";
  } else if (currentCity == "Helsinki") {
    cityDetails.innerHTML = "is the capital, primate, and most populous city of Finland. Located on the shore of the Gulf of Finland.";
    cityPopulation.innerHTML = "Population: 631 695";
  } else if (currentCity == "Honolulu") {
    cityDetails.innerHTML = "Honolulu is the capital and largest city of the U.S. state of Hawaii, which is located in the Pacific Ocean.";
    cityPopulation.innerHTML = "Population: 348 985";
  } else if (currentCity == "Istanbul") {
    cityDetails.innerHTML = "Istanbul, formerly known as Constantinople, is the largest city in Turkey, serving as the country's economic, cultural and historic hub.";
    cityPopulation.innerHTML = "Population: 15,46 millon";
  } else if (currentCity == "Jakarta") {
    cityDetails.innerHTML = "Jakarta, officially the Special Capital Region of Jakarta, is the largest city of Indonesia. Lying on the northwest coast of Java, the world's most populous island,";
    cityPopulation.innerHTML = "Population: 10,56 millon";
  } else if (currentCity == "Jerusalem") {
    cityDetails.innerHTML = "Jerusalem  is a city in Western Asia. Situated on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea, it is one of the oldest cities in the world, and is considered holy for the three major Abrahamic religions: Judaism, Christianity, and Islam.";
    cityPopulation.innerHTML = "Population: 874 186";
  } else if (currentCity == "London") {
    cityDetails.innerHTML = "London is the capital and largest city of England and the United Kingdom.";
    cityPopulation.innerHTML = "Population: 8,982 millon";
  } else if (currentCity == "Melbourne") {
    cityDetails.innerHTML = "Melbourne is the capital and most-populous city of the Australian state of Victoria, and the second-most populous city in both Australia and Oceania.";
    cityPopulation.innerHTML = "Population: 5,078 millon";
  } else if (currentCity == "Nairobi") {
    cityDetails.innerHTML = "Nairobi is the capital and the largest city of Kenya. The name comes from the Maasai phrase Enkare Nairobi, which translates to 'cool water', a reference to the Nairobi River which flows through the city.";
    cityPopulation.innerHTML = "Population: 4,397 millon";
  } else if (currentCity == "New York") {
    cityDetails.innerHTML = "New York, often called New York City (NYC) to distinguish it from the state of New York, is the most populous city in the United States.";
    cityPopulation.innerHTML = "Population: 8,419 millon";
  } else if (currentCity == "Paris") {
    cityDetails.innerHTML = "Paris is the capital and most populous city of France. Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts.";
    cityPopulation.innerHTML = "Population: 2,161 millon";
  } else if (currentCity == "Singapore") {
    cityDetails.innerHTML = "Singapore, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.";
    cityPopulation.innerHTML = "Population: 5,686 millon";
  } else if (currentCity == "Timbuktu") {
    cityDetails.innerHTML = "Timbuktu is a city in Mali, situated twenty kilometres (12 mi) north of the Niger River. The town is the capital of the Tombouctou Region, one of the eight administrative regions of Mali.";
    cityPopulation.innerHTML = "Population: ~ 60 000";
  } else if (currentCity == "Vienna") {
    cityDetails.innerHTML = "Vienna is the national capital, largest city, and one of nine states of Austria.";
    cityPopulation.innerHTML = "Population: 1,897 millon";
  } else if (currentCity == "Qatar") {
    cityDetails.innerHTML = "Qatar is a country in Western Asia. It occupies the small Qatar Peninsula on the northeastern coast of the Arabian Peninsula.";
    cityPopulation.innerHTML = "Population: 2,881 millon";
  } else if (currentCity == "Yukon") {
    cityDetails.innerHTML = "Yukon is the smallest and westernmost of Canada's three territories. It also is the second-least populated province or territory in Canada.";
    cityPopulation.innerHTML = "Population: 31 000";
  }


  cityButton.addEventListener("click", () => {
    detailWindow.style.display = "block";
  });

  span.addEventListener("click", () => {
    detailWindow.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == detailWindow) {
      detailWindow.style.display = "none";
    }
  })

}

