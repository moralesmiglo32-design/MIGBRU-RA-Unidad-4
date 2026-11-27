
require('dotenv').config();

const getWeather = async (latitude, longitude) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
        throw new Error('Falta configurar la clave de OpenWeather');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=es`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('No se pudo obtener el clima');
    }

    return await response.json();
};

module.exports = {
    getWeather
};
