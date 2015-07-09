var models = require('../models/models.js');

// GET /quizes/question
exports.question = function(req, res) {
   res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
   if (req.query.respuesta === 'Roma'){
      res.render('quizes/answer', {respuesta: 'Correcto'});
   } else {
      res.render('quizes/answer', {respuesta: 'Incorrecto'});
   }
};

exports.author = function(req, res) {
   res.render('quizes/author', {});
};

// GET /quizes/busqueda
exports.busqueda = function(req, res) {
  if (req.query.search != undefined)
  {
  models.Quiz.findAll({where: ["pregunta like ?","%"+req.query.search+"%"],order: 'pregunta ASC'}).success(function(quizes) {
    res.render('quizes/busqueda', { quizes: quizes});
  })
}else res.render('quizes/busqueda', { quizes: {}});
};
