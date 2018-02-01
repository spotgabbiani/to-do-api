const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./api/models/todoModel');
const bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list api on: ' + port);