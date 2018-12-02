var express = require('express');
var bodyParser = require('body-parser');
const universityDao = require('./data/daos/university.dao.server');


var app = express();

// Configuring app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialization Of Database
require('./data/db')();

// Declaring Funcs

const truncateDatabase = (req, res) =>
    universityDao.truncateDatabase().then(() => res.json("200")).catch(err => res.json(err));

// const populateDatabase = (req, res) =>
//     universityDao.populateDatabase().then(() => res.json("200")).catch(err => res.json(err));

app.delete('/api/all', truncateDatabase);
// app.post('/api/populate', populateDatabase);

require('./services/student.service.server')(app);
require('./services/question.service.server')(app);
require('./services/anwer.service.server')(app);
app.listen(3000);