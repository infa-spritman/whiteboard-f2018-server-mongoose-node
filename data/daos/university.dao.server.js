const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');

createStudent = student =>
    studentModel.create(student);

findAllStudents = () =>
    studentModel.find();

findStudentById = studentId =>
    studentModel.findById(studentId);

updateStudent = (studentId, student) =>
    studentModel.updateOne({_id: studentId}, {$set: student});

deleteStudent = studentId =>
    studentModel.deleteOne({_id: studentId});

///////////////////////////////// Questions

createQuestion = question =>
    questionModel.create(question);

findAllQuestions = () =>
    questionModel.find();

findQuestionById = questionId =>
    questionModel.findById(questionId);

updateQuestion = (questionId, question) =>
    questionModel.updateOne({_id: questionId}, {$set: question});

deleteQuestion = questionId =>
    questionModel.deleteOne({_id: questionId});


//// Answer


findAnswersByStudent = studentId =>
    answerModel.find({"student": studentId}).populate('student').populate('question');

findAnswersByQuestion = questionId =>
    answerModel.find({"question": questionId}).populate('student').populate('question');

answerQuestion = (studentId, questionId, answer) =>
    answerModel.create(Object.assign(answer, {"student": studentId, "question": questionId}));

findAllAnswers = () =>
    answerModel.find().populate('student').populate('question');

findAnswerById = answerId =>
    answerModel.findById(answerId).populate('student').populate('question');

findAnswersByQuestionAndStudent = (studentId, questionId) =>
    answerModel.find({"student": studentId, "question": questionId}).populate('student').populate('question');


/////////////////////////////
truncateDatabase = () => {
    return answerModel.remove().then(() => questionModel.remove()).then(() => studentModel.remove());
};

module.exports = {
    createStudent,
    findAllStudents,
    findStudentById,
    updateStudent,
    deleteStudent,
    createQuestion,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion,
    answerQuestion,
    findAllAnswers,
    findAnswerById,
    findAnswersByQuestionAndStudent,
    findAnswersByStudent,
    findAnswersByQuestion,
    truncateDatabase

};