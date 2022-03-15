const express = require('express');
const AboutService = require('../services/about.service');
const router = express.Router();
const service = new AboutService();

router.get('/', async (req, res) => {
  const about = await service.find();
  res.json(about);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newAbout = await service.create(body);
  res.status(201).json(newAbout);
});

//crear skill
router.post('/skill', async (req, res) => {
  const body = req.body;
  const newAbout = await service.createSkill(body);
  res.status(201).json(newAbout);
});

router.patch('/', async (req, res) => {
  const body = req.body;
  const about = await service.update(body);
  res.json(about);
});

router.delete('/', async (req, res) => {
  const about = await service.delete();
  res.json(about);
});

module.exports = router;
