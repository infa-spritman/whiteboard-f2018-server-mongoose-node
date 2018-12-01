const studentModel = require('../models/student.model.server');

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

module.exports = {
    createStudent,
    findAllStudents,
    findStudentById,
    updateStudent,
    deleteStudent
}