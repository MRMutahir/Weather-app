console.log("SALAM");

let input = document.querySelector("#input");

// console.log(upercase,'upercase>>>>>>>>>>>>>>>');
let btn = document.querySelector("#btn-search");
let temperature = document.querySelector(".temperature");
let temMax = document.querySelector(".tem-Max");
let weathermain = document.querySelector(".weathermain");
let humiditymain = document.querySelector(".humiditymain");
let temMin = document.querySelector(".tem-Min");
let name = document.querySelector(".C-NAME");

// console.log(humidity, cloud_pct, feels_like);
btn.addEventListener("click", btnFoo);
// input.value.toUpperCase();
async function btnFoo() {
  let value = input.value;
  console.log(value);
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a576ed5323msh275a69ea8223e89p1d2eaajsnae6d9a9e897e",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    UI(result);
  } catch (error) {
    console.error(error);
  }
}

function UI(data) {
  let humidit = document.querySelector(".humidity");
  let cloud = document.querySelector(".cloud_pct");
  let feels = document.querySelector(".feels_like");
  let windDegrees = document.querySelector(".windDegrees");
  let windSpeed = document.querySelector(".windSpeed");
  let weatherImage = document.querySelector(".weatherImage");
  let body = document.querySelector(".body");
  console.log(body);

  // console.log(data);
  let {
    temp,
    max_temp,
    min_temp,
    humidity,
    cloud_pct,
    feels_like,
    wind_degrees,
    wind_speed,
  } = data;
  // const temperature = 18;

  if (temp >= 0 && temp <= 10) {
    console.log("Cold");

    Swal.fire("Weather is Cold");
  } else if (temp >= 11 && temp <= 20) {
    console.log("Warm");
    Swal.fire("Weather is Warm");
  } else if (temp >= 21 && temp <= 30) {
    console.log("Warm");

    Swal.fire("Weather is Warm");
  } else {
    console.log("Hot");

    Swal.fire("Weather is Hot");
  }

  name.innerHTML = input.value.toUpperCase();
  // weathermain.innerHTML = `${temp}`;
  temperature.innerHTML = `Today's temperature is ${temp}°C ;`;
  temMax.innerHTML = `Max temperature: ${max_temp}°C`;
  temMin.innerHTML = `Min temperature: ${min_temp}°C`;
  // humidity.innerHTML = "huyasdgaukas";
  humidit.innerHTML = `Humidity: ${humidity}%`;
  cloud.innerHTML = `Cloud coverage: ${cloud_pct}%`;
  feels.innerHTML = `Feels like: ${feels_like}°C`;
  windDegrees.innerHTML = `Wind Degree: ${wind_degrees}°C`;
  windSpeed.innerHTML = `Wind Speed: ${wind_speed}°C`;
  // feels.innerHTML = `Feels like: ${feels_like}°C`;

  input.value = "";
}
