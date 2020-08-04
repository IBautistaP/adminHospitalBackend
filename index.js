require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');
//crear un servidor express
const app = express();

//Configurar CORS
app.use(cors());

//base de datos
dbConnection();

//Rutas
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Hola mundo'
    });
});


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + 3000);
});

/*
//conection bs
redonetesting
mean_user
nwnAvVvyGenANaku

mongodb+srv://mean_user:nwnAvVvyGenANaku@cluster0.5x2ew.mongodb.net/test
*/