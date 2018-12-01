const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');

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
    deleteQuestion
};