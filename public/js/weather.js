
document.addEventListener('DOMContentLoaded', () => {
    const cityElement = document.getElementById('weather-city');
    const temperatureElement = document.getElementById('weather-temperature');
    const descriptionElement = document.getElementById('weather-description');
    const humidityElement = document.getElementById('weather-humidity');
    const windElement = document.getElementById('weather-wind');

    const showWeather = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `/api/weather?lat=${latitude}&lon=${longitude}`
            );

            if (!response.ok) {
                throw new Error('Error al consultar el clima');
            }

            const weather = await response.json();

            cityElement.textContent = weather.name;
            temperatureElement.textContent = `${Math.round(weather.main.temp)} °C`;
            descriptionElement.textContent = weather.weather[0].description;
            humidityElement.textContent = `Humedad: ${weather.main.humidity}%`;
            windElement.textContent = `Viento: ${weather.wind.speed} m/s`;

        } catch (error) {
            cityElement.textContent = 'No se pudo consultar el clima.';
            console.error(error);
        }
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                showWeather(
                    position.coords.latitude,
                    position.coords.longitude
                );
            },
            () => {
                cityElement.textContent = 'Usando ubicación de Ciudad Juárez';
                showWeather(31.7333, -106.4833);
            }
        );
    } else {
        cityElement.textContent = 'Usando ubicación de Ciudad Juárez';
        showWeather(31.7333, -106.4833);
    }
});
