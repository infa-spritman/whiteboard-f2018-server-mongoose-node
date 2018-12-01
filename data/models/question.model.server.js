const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
const questionModel = mongoose.model('questionModel', questionSchema);
module.exports = questionModel;