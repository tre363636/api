//importamos express
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/main");

//ejecutamos y los guaradmos en una variable app
const app = express();

//Importante porque la informacion que se manda de un body que es un json
//debe transformar en json a objeto javascrip, importante el orden!!! esimportante que pase antes que la api
//pasa por estos 3 middlewares el express
app.use(express.json());

app.use(morgan('dev'));

app.use('/api', mainRouter);
//exportamos luego
module.exports = app;

