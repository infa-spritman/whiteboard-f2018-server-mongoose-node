const universityDao = require('../data/daos/university.dao.server');
module.exports = app => {
    let createStudent = (req, res) =>
        universityDao.createStudent(req.body).then(() => res.json("200"));

    let findAllStudents = (req, res) =>
        universityDao.findAllStudents().then(students => res.json(students));

    let findStudentById = (req, res) =>
        universityDao.findStudentById(req.params['studentId']).then(student => res.json(student));

    let deleteStudent = (req, res) =>
        universityDao.deleteStudent(req.params.studentId).then(() => res.json("200"));


    let updateStudent = (req, res) =>
        universityDao.updateStudent(req.params.studentId, req.body).then(() => res.json("200"));


    app.put('/api/student/:studentId', updateStudent);
    app.delete('/api/student/:studentId', deleteStudent);
    app.get('/api/student/:studentId', findStudentById);
    app.get('/api/student', findAllStudents);
    app.post('/api/student', createStudent);
};