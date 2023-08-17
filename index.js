console.log("SALAM");

let input = document.querySelector("#input");
let btn = document.querySelector("#btn-search");
let temperature = document.querySelector(".temperature");
let temMax = document.querySelector(".tem-Max");
let weathermain = document.querySelector(".weathermain");
let humiditymain = document.querySelector(".humiditymain");
let temMin = document.querySelector(".tem-Min");
let cardHeader = document.querySelector(".card-header");
let humidity = document.querySelector(".humidity");
let cloud_pct = document.querySelector(".cloud_pct");
let feels_like = document.querySelector(".feels_like");
console.log(humidity, cloud_pct, feels_like);
btn.addEventListener("click", btnFoo);
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
  // console.log(data);
  let { temp, max_temp, min_temp, humidity, cloud_pct, feels_like } = data;
  console.log(humidity, "temperature");
  console.log(cloud_pct, " max_temp");
  console.log(feels_like, "min_temp");
  cardHeader.innerHTML = input.value;
  weathermain.innerHTML = `${temp}`;
  temperature.innerHTML = `Today's temperature is ${temp}°C ;`;
  temMax.innerHTML = `Max temperature: ${max_temp}°C`;
  temMin.innerHTML = `Min temperature: ${min_temp}°C`;
  humidity.innerHTML = "huyasdgaukas";
  // humidity.innerHTML = `Humidity: ${humidity}%`;
  // cloud_pct.innerHTML = `Cloud coverage: ${cloud_pct}%`;
  // feels_like.innerHTML = `Feels like: ${feels_like}°C`;
}
