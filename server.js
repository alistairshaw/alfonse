'use strict';

const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();

// Routes
let routes = require('./Http/routes');
app.use('/', routes);

app.listen(PORT);

console.log("Listening on port " + PORT);

module.exports = app;