function weather() {
  const cityInput = document.getElementById('city-input');
  let cityInputValue = cityInput.value;
  if (cityInputValue.length == 0) {
    cityInput.value = 'dhaka';
  }
  const cityName = cityInput.value.toLowerCase();
  const apiKey = '6d8064244f3dd90c850da59c262d3fc8';
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      const temp = (data.main.temp - 273.15).toFixed(2);
      document.getElementById('current-city-name').innerText = data.name;
      document.getElementById('current-temp').innerText = temp;
      document.getElementById('current-louds').innerText = data.weather[0].main;
      document.getElementById('error-message').style.display = 'none';
      cityInput.value = '';
    })
    .catch((err) => {
      document.getElementById('error-message').style.display = 'block';
      cityInput.value = '';
    });
}
weather();
function weatherSearch() {
  weather();
}
