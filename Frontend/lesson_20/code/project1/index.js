
const cityInput = document.querySelector(".cityInput");
const getWeatherButton = document.querySelector("#get-weather-button");
const displayWeatherContainer = document.querySelector(".display-weather-container");
const API_KEY = "xy";

const getWeatherData = async () => {
    const city = cityInput.value.trim();
    if (!city) {
        alert("Please input the city");
        return;
    }

    displayWeatherContainer.innerHTML = "<p>Loading...</p>";
    displayWeatherContainer.classList.remove("hidden");

    try {
        const response = await fetch(`API_KEY`);
        const weatherData = await response.json(); 
        if (response.ok) {
            // Only if response is okay
            const roundedTemp = Math.round(weatherData.main.temp);
            const roundedWind = Math.round(weatherData.wind.speed);
            displayWeatherContainer.innerHTML = `
                <h2>${weatherData.name}</h2>
                <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="Weather Icon" />
                <p>${roundedTemp}°C</p>
                <p>${weatherData.weather[0].description}</p>
                <p>Wind: ${roundedWind} m/s</p>
            `;
        } else {
            throw Object.assign(new Error("Error fetching weather data"), {
                responseError: weatherData, 
            });
        }
    } catch (error) {
        console.log(error.responseError); // Log the error details for debugging
        displayWeatherContainer.innerHTML = `<p class="error">${error.responseError.cod}: ${error.responseError.message}</p>`;
        displayWeatherContainer.classList.remove("hidden");
    } finally {
        displayWeatherContainer.classList.remove("hidden");
    }
};

getWeatherButton.addEventListener('click', getWeatherData);