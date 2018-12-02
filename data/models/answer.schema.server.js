const mongoose = require('mongoose');

module.exports = mongoose.Schema({
    _id: Number,
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number,
    student: {type: Number, ref: 'studentModel'},
    question: {type: Number, ref: 'questionModel'}
}, {collection: 'answers'});
