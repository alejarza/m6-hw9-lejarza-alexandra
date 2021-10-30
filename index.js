// get weather and button elements
var weatherEl = document.getElementById('weather-search')
var btn = document.querySelector('button')

// attach fetch call to button element click

btn.onclick = function() {
  console.log('clicked')
  fetch("https://api.openweathermap.org/data/2.5/weather?q=city&units=imperial&appid=0a89b31aaa3631e92d9d9874c080fc83")
  console.log(res) = city
}

function renderLocation(locations) {
    locations.forEach(function(loc) {
        var container = document.querySelector('input').value   
        var desc = document.createElement('h3')
        container.appendChild(desc)
    })
}

  // values
  // weather.description: for cloudy, overcast, etc.
  // weather.icon: for icon used with description
  // main.temp: for current temperature
  // main.feels_like: for feels like temperature
  // df: used for time ** use Date(df * 1000).toLocaleTimeString() 
  // to have it show with just the time and not date and time