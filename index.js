// get weather and button elements
var weatherEl = document.getElementById("weather")
var inputEl = document.querySelector("input")
var formEl = document.querySelector("form")
console.log( weatherEl, inputEl, formEl)

// attach fetch call to button element click
formEl.onsubmit = function(event) {
  event.preventDefault()
  var query = inputEl.value
  console.log(query)
  fetch("https://api.openweathermap.org/data/2.5/weather?appid=0a89b31aaa3631e92d9d9874c080fc83&units=imperial&q=" + query)
  .then(function(res) {
    return res.json()
  })
  .then(function(result) {
    renderWeather(result)
    inputEl.value = ""
  })
}

function renderWeather(weatherObj) {
  // clear previous search
  weatherEl.innerHTML = ""
  // weather.name: name of city
  var city = document.createElement("p")
  city.textContent = "City: " + weatherObj.name + " , " + weatherObj.sys.country
  weatherEl.appendChild(city)
  // weather.description: for cloudy, overcast, etc.
  weatherObj.weather.forEach(function(weather) {
    var weather_desc = document.createElement("h2")
    weather_desc.textContent = weather.description
    weatherEl.appendChild(weather_desc)
  })
  // weather.icon: for icon used with description
  weatherObj.weather.forEach(function(weather_icon) {
    var icon = document.createElement("img")
    icon.src = weather.icon
    weatherEl.appendChild(icon)
  })
  // main.temp: for current temperature
  var curr_temp = document.createElement("p")
  curr_temp.textContent = "Current temperature: " + weatherObj.main.temp + " °F"
  weatherEl.appendChild(curr_temp)
  // main.feels_like: for feels like temperature
  var feel_temp = document.createElement("p")
  feel_temp.textContent = "Feels like: " + weatherObj.main.feels_like + " °F"
  feel_temp.style = "font-style: italic;"
  weatherEl.appendChild(feel_temp)
  // df: used for time ** use Date(df * 1000).toLocaleTimeString() to have it show with just the time and not date and time
  // var timestamp = document.createElement("p")
  // timestamp.textContent = "Last updated: " + Date(weatherObj.df * 1000).toLocaleTimeString()
  // weatherEl.appendChild(timestamp)
}