const express = require('express');
var router = express.Router();

const modelo = require('../modelos/modeloChiste');

router.get('/', (req, res) => {
	modelo.login((error, resultado) => {
		res.render('login', {usuarios: resultado});
	});
});


router.get('/listarChiste', (req, res)=>{
			modelo.listaCategoria(req.query.id_categoria, (error, resultado)=>{
				res.render('listarChiste', {registros:resultado});
			})
		});

router.post('/login', (req, res) => {
	console.log(req.body);
	modelo.usuariosLogin(req.body, (error, resultado) => {
		res.render('index');
	});
});



router.get('/introducir', (req, res) => {
	modelo.todasCategorias((error, result) => {
		res.render('introducirChiste', {categorias: result});
	});
});

router.post('/introducir/chiste', (req, res) => {
	console.log(req.body);
	modelo.introducirChiste(req.body, (error, result) => {
		res.render('index');
	});
});


router.get('/listarChiste/chistes', (req, res) => {
	console.log(req.query)
	modelo.consultaChiste(req.query.id_categoria, (error, result) => {
			res.render('listarChiste', {chistes: result});
	});
});


module.exports = router;