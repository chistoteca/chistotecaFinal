const mysql = require('mysql');
const conectar = require('../conectar');


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
};



module.exports = {
	listaCategoria,
	consultaChiste
	
};