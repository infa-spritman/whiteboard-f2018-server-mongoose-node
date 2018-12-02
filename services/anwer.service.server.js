const universityDao = require('../data/daos/university.dao.server');
module.exports = app => {
    const answerQuestion = (req, res) =>
        universityDao.answerQuestion(req.params.sid, req.params.qid, req.body).then(() => res.json("200")).catch(err => res.json(err));

    const findAllAnswers = (req, res) =>
        universityDao.findAllAnswers().then(Answers => res.json(Answers)).catch(err => res.json(err));

    const findAnswerById = (req, res) =>
        universityDao.findAnswerById(req.params['id']).then(Answer => res.json(Answer)).catch(err => res.json(err));

    const findAnswersByQuestionAndStudent = (req, res) =>
        universityDao.findAnswersByQuestionAndStudent(req.params['sid'], req.params['qid']).then(Answer => res.json(Answer)).catch(err => res.json(err));




    app.get('/api/student/:sid/question/:qid/answer', findAnswersByQuestionAndStudent);
    app.get('/api/question/:qid/student/:sid/answer', findAnswersByQuestionAndStudent);
    app.get('/api/answer/:id', findAnswerById);
    app.get('/api/answer', findAllAnswers);
    app.post('/api/student/:sid/question/:qid/answer', answerQuestion);
};