const express = require('express');
const CursoService = require('../services/curso.service');
const router = express.Router();
const service = new CursoService();

router.get('/', async (req, res) => {
  const curso = await service.find();
  res.json(curso);
});

router.get('/:id',
  async (req, res) => {
      const { id } = req.params;
      const curso = await service.findOne(id);
      res.json(curso);
  }
);

router.post('/', async (req, res) => {
  const body = req.body;
  const newCurso = await service.create(body);
  res.status(201).json(newCurso);
});

router.patch('/:id',
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const curso = await service.update(id, body);
      res.json(curso);
    } catch (error) {
      res.status(404).json({
        name: error.name,
        message: error.message,
      })
    }
  }
);

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const curso = await service.delete(parseInt(id));
    res.json(curso);
  } catch (error) {
    res.status(404).json({
      name: error.name,
      message: error.message,
    })
  }

});

module.exports = router;
