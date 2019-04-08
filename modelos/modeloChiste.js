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
	introducirChiste
};
