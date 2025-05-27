const express = require('express');
require('dotenv').config();
const productosRoutes = require('./routes/productos');

const app = express();

app.use(express.json());

app.use('/productos', productosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
