const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const habitacionesRoutes = require('./routes/habitaciones');
//const usuariosRoutes = require('./src/routes/usuarios');
//const reservasRoutes = require('./src/routes/reservas');
//const pagosRoutes = require('./src/routes/pagos');

const app = express();
app.use(cors());
app.use(express.json());

// Usar rutas
app.use('/api/habitaciones', habitacionesRoutes);
//app.use('/api/usuarios', usuariosRoutes);
//app.use('/api/reservas', reservasRoutes);
//app.use('/api/pagos', pagosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
