const universityDao = require('../data/daos/university.dao.server');
module.exports = app => {
    let createQuestion = (req, res) =>
        universityDao.createQuestion(req.body).then(() => res.json("200")).catch(err => res.json(err));

    let findAllQuestions = (req, res) =>
        universityDao.findAllQuestions().then(questions => res.json(questions)).catch(err => res.json(err));

    let findQuestionById = (req, res) =>
        universityDao.findQuestionById(req.params['id']).then(question => res.json(question)).catch(err => res.json(err));

    let deleteQuestion = (req, res) =>
        universityDao.deleteQuestion(req.params.id).then(() => res.json("200")).catch(err => res.json(err));


    let updateQuestion = (req, res) =>
        universityDao.updateQuestion(req.params.id, req.body).then(() => res.json("200")).catch(err => res.json(err));


    app.put('/api/question/:id', updateQuestion);
    app.delete('/api/question/:id', deleteQuestion);
    app.get('/api/question/:id', findQuestionById);
    app.get('/api/question', findAllQuestions);
    app.post('/api/question', createQuestion);
};