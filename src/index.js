const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({ status: "OK", message: "Microservicio operativo" });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: "Healthy" });
});

// Ruta para generar logs de errores en cloudwatch
app.get('/error', (req, res) => {
    console.error(`[ERROR] [${new Date().toISOString()}] Falla crítica simulada en el sistema.`);
    res.status(500).json({ status: "Error", message: "Falla simulada de auditoría" });
});

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = { app, server };