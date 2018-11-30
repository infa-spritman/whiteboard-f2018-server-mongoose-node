const studentModel = require('../models/student.model.server')

createStudent = student =>
  studentModel.save(student)

findAllStudents = () =>
  studentModel.find()

findStudentById = studentId =>
  studentModel.findId(studentId)

updateStudent = (studentId, student) =>
  studentModel.update({_id: studentId}, {$set: student})

deleteStudent = studentId =>
  studentModel.remove({_id: studentId})

module.exports = {
  createStudent,
  findAllStudents,
  findStudentById,
  updateStudent,
  deleteStudent
}