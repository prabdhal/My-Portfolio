const bg = document.querySelector(".bg");
const searchElement = document.querySelector(".search-box");
const searchBox = new google.maps.places.SearchBox(searchElement);
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weatherElement = document.querySelector(".weather-condition");
const weatherIcon = document.querySelector(".weather-icon");
const hiLow = document.querySelector(".hi-low");
const feelsLike = document.querySelector(".feels-like");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

searchBox.addListener("places_changed", () => {
  const place = searchBox.getPlaces()[0];
  if (place == null) return;
  const latitude = place.geometry.location.lat();
  const longitude = place.geometry.location.lng();
  fetch("/weatherapp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      setWeatherData(data, place.formatted_address);
    })
    .catch((err) => {
      console.log(err);
    });
});

function setWeatherData(data, place) {
  city.textContent = place;
  let now = new Date();
  date.textContent = renderDateFormat(now);
  temp.textContent = `${Math.round(data.main.temp).toFixed(0)}`;
  weatherElement.textContent = data.weather[0].main;
  hiLow.textContent = `${Math.round(data.main.temp_min)}°c / 
  ${Math.round(data.main.temp_max)}°c`;
  feelsLike.textContent = `${data.main.feels_like}°c`;
  windSpeed.textContent = `${data.wind.speed} km/h`;
  humidity.textContent = `${data.main.humidity}%`;
  pressure.textContent = `${Math.round(data.main.pressure * 0.1)} kPa`;
  sunrise.textContent = `${renderTimeFormat(toDateTime(data.sys.sunrise))}`;
  sunset.textContent = `${renderTimeFormat(toDateTime(data.sys.sunset))}`;
  weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.alt = `${data.weather[0].description}`;

  removeAllClassesFromBackground();
  console.log(weatherElement.textContent);
  addClassesToBackground(weatherElement.textContent);
}

function renderDateFormat(d) {
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
  const days = ["Sun", "Mon", "Tues", "Wed", "thurs", "Fri", "Sat"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function renderTimeFormat(d) {
  let hour = d.getHours();
  let min = d.getMinutes();

  if (min <= 9) {
    min = "0" + min;
    console.log(min);
  }

  return `${hour}:${min}`;
}

function toDateTime(s) {
  var d = new Date(s * 1000);
  return d;
}

function removeAllClassesFromBackground() {
  bg.classList.remove("sunny");
  bg.classList.remove("rain");
  bg.classList.remove("clouds");
  bg.classList.remove("snow");
  bg.classList.remove("clear");
  bg.classList.remove("misty");
  bg.classList.remove("fog");
  bg.classList.remove("haze");
  bg.classList.remove("smoke");
  bg.classList.remove("default");
}

function addClassesToBackground(weatherCondition) {
  switch (weatherCondition) {
    case "Sunny":
      bg.classList.add("sunny");
      break;
    case "Rainy":
      bg.classList.add("rain");
      break;
    case "Clouds":
      bg.classList.add("clouds");
      break;
    case "Snow":
      bg.classList.add("snow");
      break;
    case "Clear":
      bg.classList.add("clear");
      break;
    case "Misty":
      bg.classList.add("misty");
      break;
    case "Fog":
      bg.classList.add("fog");
      break;
    case "Haze":
      bg.classList.add("haze");
      break;
    case "Smoke":
      bg.classList.add("smoke");
      break;
    default:
      bg.classList.add("default");
      break;
  }
}
