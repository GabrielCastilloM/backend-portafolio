const express = require("express");

//importamos archivos de routes
const aboutRouter = require('./about.router')
const proyectosRouter = require('./proyectos.router');

function routerApi(app) {
  //creamos un patch global para todos los enpoints
  const router = express.Router();
  app.use('/api/v1', router)
  //enpoints principales
  router.use('/about', aboutRouter)
  router.use('/proyectos', proyectosRouter)
}

module.exports = routerApi;
