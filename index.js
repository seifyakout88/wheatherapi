let search = document.getElementById("search");

/**
 * this function get Weather location and Show Weather For you
 */
async function getWeather() {
  const req = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=1353d466fd5b4543b21133209240812&q=cairo&days=3"
  );

  const result = await req.json();

  displayWeather(result);
  console.log(result);
}
getWeather();

// get Date and Day and month
let fullDate = new Date();

let day = fullDate.getDay();
let date = fullDate.getDate();
let month = fullDate.getMonth();
let nextday = day + 1;
let TheDayAfterTheNext = nextday + 1;

if (nextday == 6) {
  TheDayAfterTheNext = 0;
}
if (nextday > 6) {
  nextday = 0;
  TheDayAfterTheNext = 1;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
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

/**
 * this function display the weather for you
 * @param {} list
 */
function displayWeather(list) {
  document.getElementById("weatherDisplay").innerHTML = `

 <div class="col-xl-4 weather-info rounded-start-1 px-0">
              <div class="card border-0 rounded-start-1 rounded-end-0">
                <div class="card-header d-flex justify-content-between pt-3 pb-1">
                  <h2>${days[day]}</h2>
                  <h3>${date}${months[month]}</h3>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${list.location["name"]}</h5>
                  <div class="temperature-info special justify-content-between align-items-center">
                    <h3 class="card-text degree special">${list.current.temp_c}<small class="position-relative special">o</small>C</h3>
                    <img src="${list.current.condition.icon}" width="90" class="img-fluid" alt="${list.current.condition.text}">
                  </div>
                  <h4 class="temperature mt-3">${list.current.condition.text}</h4>

                  <div class="temperature-imgs d-flex gap-2 justify-content-between w-50 pt-4 pb-2">
                    <div class="img-one d-flex align-items-center gap-2">
                      <img width="25px" src="imgs/icon-umberella.png" alt="umberella">
                      <p class="mb-0">20%</p>
                    </div>

                    <div class="img-one d-flex align-items-center gap-2">
                      <img width="25px" src="imgs/icon-wind.png" alt="umberella">
                      <p class="mb-0">20%</p>
                    </div>

                    <div class="img-one d-flex align-items-center gap-2">
                      <img width="25px" src="imgs/icon-compass.png" alt="umberella">
                      <p class="mb-0">20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>





<div class="col-xl-4 weather-info rounded-0  px-0">
              <div class="card two border-0 rounded-0 text-center">
                <div class="card-header two pt-3 pb-1">
                  <h2>${days[nextday]}</h2>
                </div>
                <div class="card-body">
                  <div class="mt-4">
                    <img src="${list.forecast.forecastday[1].day.condition.icon}" width="40" class="img-fluid" alt="${list.forecast.forecastday[1].day.condition.text}">
                  </div>

                <div class="temperature-info-two mt-4">
                  <h3 class="card-text degree maxmimum">${list.forecast.forecastday[1].day.maxtemp_c}<small class="position-relative">o</small>C</h3>
                  <h3 class="card-text degree minmum ">${list.forecast.forecastday[1].day.mintemp_c}<small class="position-relative">o</small></h3>
                  <h4 class="temperature mt-3">${list.forecast.forecastday[1].day.condition.text}</h4>
                </div>

                </div>
              </div>
            </div>



 <div class="col-xl-4 weather-info  px-0">
              <div class="card  border-0 rounded-start-0 rounded-end-1 text-center">
                <div class="card-header  pt-3 pb-1">
                  <h2>${days[TheDayAfterTheNext]}</h2>
                </div>
                <div class="card-body">
                  <div class="mt-4">
                    <img src="${list.forecast.forecastday[2].day.condition.icon}" width="40" class="img-fluid" alt="${list.forecast.forecastday[2].day.condition.text}">
                  </div>

                <div class="temperature-info-two mt-4">
                  <h3 class="card-text degree maxmimum">${list.forecast.forecastday[2].day.maxtemp_c}<small class="position-relative">o</small>C</h3>
                  <h3 class="card-text degree minmum ">${list.forecast.forecastday[2].day.mintemp_c}<small class="position-relative">o</small></h3>
                  <h4 class="temperature mt-3">${list.forecast.forecastday[2].day.condition.text}</h4>
                </div>

                </div>
              </div>
            </div>



`;
}

/**
 * this function take value from search input and search for new loction
 * @param {*} input
 */
async function searchWeatherLocation(input) {
  const req = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1353d466fd5b4543b21133209240812&q=${input}&days=3`
  );

  const result = await req.json();

  displayWeather(result);
}

search.addEventListener("keypress", function () {
  searchWeatherLocation(search.value);
});
