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

populateDatabase = () => {

    const alice = {
        _id: 123,
        username: "alice",
        password: "alice",
        firstName: "Alice",
        lastName: "Wonderland",
        scholarship: 15000,
        gradYear: 2020
    };

    const bob = {
        _id: 234,
        username: "bob",
        password: "bob",
        firstName: "Bob",
        lastName: "Hope",
        scholarship: 12000,
        gradYear: 2021
    };

    const question321 = {
        _id: 321,
        question: "Is the following schema valid?",
        points: 10,
        questionType: "TRUE_FALSE",
        trueFalse: {isTrue: false}
    };

    const question543 = {
        _id: 543,
        question: "What does JPA stand for?",
        points: 10,
        questionType: "MULTIPLE_CHOICE",
        multipleChoice: {
            choices: "Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations",
            correct: 1
        }
    };

    const question432 = {
        _id: 432,
        question: "DAO stands for Dynamic Access Object.",
        points: 10,
        questionType: "TRUE_FALSE",
        trueFalse: {isTrue: false}
    };

    const question654 = {
        _id: 654,
        question: "What does ORM stand for?",
        points: 10,
        questionType: "MULTIPLE_CHOICE",
        multipleChoice: {
            choices: "Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping",
            correct: 4
        }
    };

    const answer123 = {
        "_id": 123,
        "trueFalseAnswer": true
    };

    const answer234 = {
        "_id": 234,
        "trueFalseAnswer": false
    };

    const answer345 = {
        "_id": 345,
        "multipleChoiceAnswer": 1
    };

    const answer456 = {
        "_id": 456,
        "multipleChoiceAnswer": 2
    };


    const answer567 = {
        "_id": 567,
        "trueFalseAnswer": false
    };

    const answer678 = {
        "_id": 678,
        "trueFalseAnswer": true
    };

    const answer789 = {
        "_id": 789,
        "multipleChoiceAnswer": 3
    };

    const answer890 = {
        "_id": 890,
        "multipleChoiceAnswer": 4
    };

    return createStudent(alice)
        .then(() => createStudent(bob))
        .then(() => createQuestion(question321))
        .then(() => createQuestion(question432))
        .then(() => createQuestion(question543))
        .then(() => createQuestion(question654))
        .then(() => answerQuestion(123, 321, answer123))
        .then(() => answerQuestion(123, 432, answer234))
        .then(() => answerQuestion(123, 543, answer345))
        .then(() => answerQuestion(123, 654, answer456))
        .then(() => answerQuestion(234, 321, answer567))
        .then(() => answerQuestion(234, 432, answer678))
        .then(() => answerQuestion(234, 543, answer789))
        .then(() => answerQuestion(234, 654, answer890));


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
    truncateDatabase,
    populateDatabase

};