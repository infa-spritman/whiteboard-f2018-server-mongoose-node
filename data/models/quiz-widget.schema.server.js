const mongoose = require('mongoose');
const questionWidgetSchema = mongoose.Schema({
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questionModel'
    }]
}, {collection: 'question-widgets'});
module.exports = questionWidgetSchema;