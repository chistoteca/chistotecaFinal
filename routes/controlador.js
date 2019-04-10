const express = require('express');//requiero al módulo 'express'
var router = express.Router();//creo la variable que enruta express a las peticiones

const modelo = require('../modelos/modeloChiste');//requiero al archivo de la carpeta 'routes' donde tengo el método query


//GET que llama a la plantilla login.pug
router.get('/', (req, res)=>{
	res.render('login');
});


//renderizo la plantilla 'index.pug' a través de la url '/index', con el método GET y el callback
router.get('/index', (req, res)=>{
		res.render('index');
	})

//POST para introducir y comprobar el usuario y la contraseña. 
router.post('/login', (req, res)=>{
	modelo.login(req.body, (error, resultado)=>{
		if(resultado.length == 1){
        	if (resultado[0].contrasenya != req.body.contrasenya) {
        		 res.render('login', {mensaje: 'La contraseña no es correcta.'})
        	}else {
				res.render('index')
    		}
    	}else {
            res.render('login', {mensaje:'El usuario no está registrado'})
	    }
	});
       
});

//renderizo la plantilla 'listarChiste' a través de la url '/listarChiste',
//que mostrará un desplegable (SELECT en la plantilla), con el método GET y el callback,
//que llama a la constante 'listaCategoria' del archivo 'modeloChiste.js', donde se verán las 
//categorías de la BD
router.get('/listarChiste', (req, res)=>{
			modelo.listaCategoria(req.query.id_categoria, (error, resultado)=>{
				res.render('listarChiste', {registros:resultado});
			})
		});

//GET que llama a la plantilla introducirChiste.pug
router.get('/introducir', (req, res) => {
	modelo.todasCategorias((error, result) => {
		res.render('introducirChiste', {categorias: result});
	});
});

//POST con el que introducimos un chiste en la base de datos y redirigimos a la plantilla 'introducirChiste' para poder introducir 
//otro chiste o bien volver a la plantilla 'index'
router.post('/introducir/chiste', (req, res) => {
	console.log(req.body);
	modelo.introducirChiste(req.body, (error, result) => {
		res.redirect('/introducir');
	});
});

//renderizo la plantilla 'listarChiste' a través de la url '/listarChiste/chistes',
//que mostrará una lista numerada , con el método GET y el callback,
//que llama a la constante 'consultaChiste' del archivo 'modeloChiste.js', donde se verán los 
//chistes de la BD, según la id de la categoría seleccionada anteriormente.
router.get('/listarChiste/chistes', (req, res) => {
	console.log(req.query)
	modelo.consultaChiste(req.query.id_categoria, (error, result) => {
			res.render('listarChiste', {chistes: result});
	});
});


module.exports = router;
