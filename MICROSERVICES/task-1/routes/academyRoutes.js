const express = require('express');
const router = express.Router();
const Academy = require('../models/academyModel');

// Create academy
router.post('/', async (req, res) => {
  try {
    const academy = new Academy(req.body);
    await academy.save();
    res.status(201).send(academy);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all academies
router.get('/', async (req, res) => {
  try {
    const academies = await Academy.find();
    res.send(academies);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update academy
router.patch('/:id', async (req, res) => {
  try {
    const academy = await Academy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!academy) {
      return res.status(404).send({ message: 'Academy not found' });
    }
    res.send(academy);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete academy
router.delete('/:id', async (req, res) => {
  try {
    const academy = await Academy.findByIdAndDelete(req.params.id);
    if (!academy) {
      return res.status(404).send({ message: 'Academy not found' });
    }
    res.send(academy);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
