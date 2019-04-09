const express = require('express');
var router = express.Router();

const modelo = require('../modelos/modeloChiste');


router.get('/listarChiste', (req, res)=>{
			modelo.listaCategoria(req.query.id_categoria, (error, resultado)=>{
				res.render('listarChiste', {registros:resultado});
			})
		});


router.get('/listarChiste/chistes', (req, res) => {
	console.log(req.query)
	modelo.consultaChiste(req.query.id_categoria, (error, result) => {
			res.render('listarChiste', {chistes: result});
	});
});


module.exports = router;