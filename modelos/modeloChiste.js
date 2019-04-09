const mysql = require('mysql');
const conectar = require('../conectar');

const login = (callback) => {
	conectar.query('SELECT * FROM usuarios', (error, result) => {
		if (error) throw error;
		else {
			return callback(error, result);
		};
	});
};

const todasCategorias = (callback) => {
	conectar.query('SELECT * FROM categorias', (error, result) => {
		if (error) throw error;
		else {
			return callback(error, result);
		};
	});
};

const listaCategoria = (categoria,callback)=>{
	conectar.query('SELECT * FROM categorias', categoria, (error, resultado)=>{
		if (error) throw error;
		else{
			return callback(error, resultado);
		}
	});
};

const consultaChiste = (id_categoria, callback) =>{
	console.log('hola')
	conectar.query('SELECT chiste FROM chistes WHERE id_categoria = ?', id_categoria, (error, result) =>{
		console.log(result);
		return callback(error, result);
	});

const introducirChiste = (chiste, callback) => {
	conectar.query('INSERT INTO chistes (chiste, id_categoria) VALUES ("' + chiste.chiste + '", "' + chiste.id_categoria + '")', (error, result) => {
		console.log('modelo: ' + chiste.chiste + ', ' + chiste.id_categoria);
		if (error) throw error;
		else {
			return callback(error, result);
		};
	});
};

module.exports = {
	todasCategorias,
	introducirChiste,
	listaCategoria,
	consultaChiste,
	login
};