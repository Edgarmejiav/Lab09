const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

//Conexion a la base de datos
const { dbconection } = require('./database/config');
//Confirugacion del cors
app.use(cors());
//setting
app.set('port', process.env.PORT || 4000);
//user: usermejia
//:pass: y6QtCAYeysfnl67I
//string conex: mongodb+srv://usermejia:y6QtCAYeysfnl67I@cluster0.utj1e.mongodb.net/test

//routes
app.get('/', (req, res) => {
    res.json({
        ok: 'true',
        msg: 'Desplegando '
    });
});

dbconection();

// Desplegar 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    console.log('Edgar Mejia Vasquez')
});