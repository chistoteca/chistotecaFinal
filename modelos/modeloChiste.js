const mysql = require('mysql');//requiere el módulo 'mysql'
const conectar = require('../conectar');//requiere el archivo 'conectar.js', que conecta con la BD


const login = (datosLogin, callback)=> {
	conectar.query('SELECT * FROM usuarios WHERE usuario=?', datosLogin.usuario, (error, resultado)=>{
        if(error) throw error;
        else {
        	return callback (error, resultado)
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

/* la constante, a través de la función, hace una consulta (query) a la BD a través de la constante 
'conectar', que a su vez tiene otra función callback*/
const listaCategoria = (categoria,callback)=>{
	conectar.query('SELECT * FROM categorias', categoria, (error, resultado)=>{//'categoria' es la función anterior
		if (error) throw error;//si no lo encuentra, sale error
		else{
			return callback(error, resultado);//si es correcto, llama a la función callback y ofrece el resultado
		}
	});
};

/* la constante, a través de la función, hace una consulta (query) a la BD a través de la constante 
'conectar', que a su vez tiene otra función callback*/
const consultaChiste = (id_categoria, callback) =>{
	conectar.query('SELECT chiste FROM chistes WHERE id_categoria = ?', id_categoria, (error, result) =>{//'id_categoria' es la función anterior
		return callback(error, result);//si es correcto, llama a la función callback y ofrece el resultado
	});
}

const introducirChiste = (chiste, callback) => {
	conectar.query('INSERT INTO chistes (chiste, id_categoria) VALUES ("' + chiste.chiste + '", "' + chiste.id_categoria + '")', (error, result) => {
		console.log('modelo: ' + chiste.chiste + ', ' + chiste.id_categoria);
		if (error) throw error;
		else {
			return callback(error, result);
		};
	});
};

//exporto las constantes, que son métodos, al archivo 'controlador.js'
module.exports = {
	login,
	todasCategorias,
	introducirChiste,
	listaCategoria,
	consultaChiste

};