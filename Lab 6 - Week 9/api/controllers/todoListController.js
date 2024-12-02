// File: api/controllers/todoListController.js

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

// List all tasks
exports.list_all_tasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new task
exports.create_a_task = async (req, res) => {
  try {
    const new_task = new Task(req.body);
    const savedTask = await new_task.save();
    res.json(savedTask);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Read a task by ID
exports.read_a_task = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    res.json(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a task by ID
exports.update_a_task = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.taskId },
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete a task by ID
exports.delete_a_task = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.taskId });
    res.json({ message: 'Task successfully deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};
