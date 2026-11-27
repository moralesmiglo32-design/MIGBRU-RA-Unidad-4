
const weatherService = require('../services/weatherService');

const getWeather = async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({
                message: 'Se necesitan las coordenadas'
            });
        }

        const weather = await weatherService.getWeather(lat, lon);

        res.json(weather);

    } catch (error) {
        console.error('Error al consultar el clima:', error);

        res.status(500).json({
            message: 'No se pudo obtener la información del clima'
        });
    }
};

module.exports = {
    getWeather
};
