const express = require('express');
const winston = require('winston');
const expressWinston = require('express-winston');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console() 
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() 
  ),
  meta: true,
  msg: "HTTP {{req.method}} {{req.url}} - Status: {{res.statusCode}}",
  expressFormat: true,
  colorize: false
}));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.get('/', (req, res) => {
  res.send('Microservicio DevOps operando en AWS CloudWatch');
});

app.get('/error', (req, res) => {
  throw new Error('Excepción simulada en el servidor');
});

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  )
}));

const server = app.listen(PORT, () => {
  console.log(`Servidor iniciado exitosamente en el puerto ${PORT}`);
});

module.exports = { app, server };