const mongoose = require('mongoose');
const answerSchema = require('./answer.schema.server');
const answerModel = mongoose.model('answerModel', answerSchema);
module.exports = answerModel;