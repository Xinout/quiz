var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question',  quizController.question);
router.get('/quizes/answer',  quizController.answer);
router.get('/quizes/author',  quizController.author);
router.get('/quizes/busqueda',  quizController.busqueda);

module.exports = router;
