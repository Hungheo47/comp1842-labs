// File: api/routes/todoListRoutes.js

module.exports = function(app) {
    const todoList = require('../controllers/todoListController');
  
    // TodoList Routes
    app.route('/tasks')
      .get(todoList.list_all_tasks)   // Get all tasks
      .post(todoList.create_a_task);  // Create a new task
  
    app.route('/tasks/:taskId')
      .get(todoList.read_a_task)      // Get a task by ID
      .put(todoList.update_a_task)    // Update a task by ID
      .delete(todoList.delete_a_task); // Delete a task by ID
  };
  