var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// app.use(session({
//   resave: false,
//   saveUninitialized: true,
//   secret: 'any string'
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialization Of Database
require('./data/db')();



require('./services/student.service.server')(app);
require('./services/question.service.server')(app);
require('./services/anwer.service.server')(app);
app.listen(3000);