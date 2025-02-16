async function getWeather() {
    let location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    
    let apiKey = '2ff6f80cb4324060b1663853251602';
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        let temp = data.current.temp_c;
        document.getElementById('weatherResult').innerHTML = 
            `Temperature in ${data.location.name}, ${data.location.country}: <b>${temp}°C</b>`;

        // Change background based on temperature
        if (temp < 15) {
            document.body.style.background = "url('cold.jpg') no-repeat center center fixed";
        } else {
            document.body.style.background = "url('summer.jpg') no-repeat center center fixed";
        }
        document.body.style.backgroundSize = "cover";

    } catch (error) {
        document.getElementById('weatherResult').innerHTML = 'Error fetching weather data. Please try again.';
    }
}

// Attach event listener to button
document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
