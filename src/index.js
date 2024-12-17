function showCurrentTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let cityElement = document.querySelector("#current-city");
  let weatherIconElement = document.querySelector(".current-temperature-icon");
  let currentTemperature = Math.round(response.data.temperature.current);
  let weatherIcon = response.data.condition.icon_url;
  let weatherDescription = document.querySelector("#current-description");
  temperatureElement.innerHTML = currentTemperature;
  cityElement.innerHTML = response.data.city;
  weatherIconElement.innerHTML = `<img src="${weatherIcon}" alt="weather_icon" />`;
  weatherDescription.innerHTML = response.data.condition.description;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let currentCity = searchInputElement.value;

  let apiKey = "5912o91beb33d634bfd91ta0a18fa0bd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
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

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
