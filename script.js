const userInput = document.getElementById("inputField");
const searchBtn = document.getElementById("btn");
const Teampareture = document.querySelector("#temp");
const windSpeed = document.querySelector("#wind");
const Humidity = document.querySelector("#humidity");
const place = document.querySelector("#place");

const apiKey = "e1c4409cbddec4dfda1a4bfd52e0c7a0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

searchBtn.addEventListener("click", () => {
  let cityName = userInput.value;
  fetch(`${apiUrl}&q=${cityName}&appid=${apiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      if (data.cod == 404) {
        place.innerText = "City or Place not Found";
      } else {
        place.innerText = `${cityName}`;
        Teampareture.innerText = `${data.main.temp}°C`;
        windSpeed.innerText = `${data.wind.speed} Km/h`;
        Humidity.innerText = `${data.main.humidity} %`;
      }
    })
    .catch((err) => {
      console.error("ERROR", err);
    });
});
