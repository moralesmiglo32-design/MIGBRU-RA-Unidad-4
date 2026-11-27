
const express = require('express');
const router = express.Router();

const weatherController = require('../controllers/weatherController');

// Consultar el clima
router.get('/', weatherController.getWeather);

module.exports = router;
