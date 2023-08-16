console.log("SALAM");

// async function App_Api() {}
// App_Api();

let input = document.querySelector("#input");
let btn = document.querySelector("#btn-search");
// console.log(input);
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
  } catch (error) {
    console.error(error);
  }
}
