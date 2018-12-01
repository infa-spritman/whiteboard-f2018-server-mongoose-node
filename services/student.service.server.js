const universityDao = require('../data/daos/university.dao.server');
module.exports = app => {
    let createStudent = (req, res) =>
        universityDao.createStudent(req.body).then(() => res.json("200")).catch(err => res.json(err));

    let findAllStudents = (req, res) =>
        universityDao.findAllStudents().then(students => res.json(students)).catch(err => res.json(err));

    let findStudentById = (req, res) =>
        universityDao.findStudentById(req.params['id']).then(student => res.json(student)).catch(err => res.json(err));

    let deleteStudent = (req, res) =>
        universityDao.deleteStudent(req.params.id).then(() => res.json("200")).catch(err => res.json(err));


    let updateStudent = (req, res) =>
        universityDao.updateStudent(req.params.id, req.body).then(() => res.json("200")).catch(err => res.json(err));


    app.put('/api/student/:id', updateStudent);
    app.delete('/api/student/:id', deleteStudent);
    app.get('/api/student/:id', findStudentById);
    app.get('/api/student', findAllStudents);
    app.post('/api/student', createStudent);
};