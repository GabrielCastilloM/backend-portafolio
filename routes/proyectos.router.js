const express = require('express');
const ProyectosService = require('../services/proyecto.service');
const validatorHandler = require('./../middleware/validator.handler')
const {createProyectoSchema, UpdateProyectotSchema, getProyectoSchema} = require('./../schemas/proyectoSchema')
const router = express.Router();
const service = new ProyectosService();

router.get('/', async (req, res, next) => {
  try {
    const curso = await service.find();
    res.json(curso);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProyectoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const proyecto = await service.findOne(id);
      res.json(proyecto);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProyectoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProyecto = await service.create(body);
      res.status(201).json(newProyecto);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getProyectoSchema, 'params'),
  validatorHandler(UpdateProyectotSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const proyecto = await service.update(id, body);
      res.json(proyecto);
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id',
  validatorHandler(getProyectoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const proyecto = await service.delete(parseInt(id));
      res.json(proyecto);
    } catch (error) {
      next(error)
    }
  }
);

module.exports = router;
