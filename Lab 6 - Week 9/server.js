const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Import the model
require('./api/models/todoListModel');

// Import routes
const routes = require('./api/routes/todoListRoutes');

// Mongoose connection with success and error handling
mongoose.connect('mongodb://localhost/todo')
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log('Error connecting to the database', err);
    process.exit();  // Optional: exit the process if the connection fails
  });

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); // Register the routes

// Start the server
app.listen(port, () => {
  console.log(`ToDo List RESTful API server started on: ${port}`);
});
