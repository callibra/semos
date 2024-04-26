const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel');

// Create course
router.post('/', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update course
router.patch('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) {
      return res.status(404).send({ message: 'Course not found' });
    }
    res.send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete course
router.delete('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).send({ message: 'Course not found' });
    }
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
