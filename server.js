
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuracion general
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos CSS, JavaScript e imagenes
app.use(express.static(path.join(__dirname, 'public')));

// Pagina de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Catalogo de productos
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

// Informacion de la empresa
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`MIGBRU disponible en http://localhost:${PORT}`);
});
