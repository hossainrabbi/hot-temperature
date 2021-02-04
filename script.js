function weatherSearch() {
  const cityInput = document.getElementById('city-input');
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
      cityInput.value = '';
    })
    .catch((err) => {
      alert('Please give me a valid city name');
      cityInput.value = '';
    });
}
