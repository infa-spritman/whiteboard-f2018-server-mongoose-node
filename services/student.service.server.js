const studentDao = require('../dao/student.dao.server')()
module.exports = app => {
  createStudent = (req, res) =>
    res.json(studentDao.createStudent(req.body))

  findAllStudents = (req, res) =>
    res.json(studentDao.findAllStudents())

  findStudentById = (req, res) =>
    res.json(
      studentDao.findStudentById(req.params['studentId'])
    )

  deleteStudent = (req, res) =>
    res.json(
      studentDao.deleteStudent(req.params.studentId)
    )

  updateStudent = (req, res) =>
    res.json(
      studentDao.updateStudent(req.params.studentId, req.body)
    )

  app.put('/api/student/:studentId', updateStudent)
  app.delete('/api/student/:studentId', deleteStudent)
  app.get('/api/student/:studentId', findStudentById)
  app.get('/api/student', findAllStudents)
  app.post('/api/student', createStudent)
}