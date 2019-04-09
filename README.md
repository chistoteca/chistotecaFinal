# chistotecaFinal
entregable Módulo 3

Esta página web consiste en introducir chistes en la base de datos y consultarlos por categoría después de haberse identificado el usuario.

COMÚN:

Estructura de la base de datos y estructura de la web.
Los archivos 'controlador.js' y 'modeloChiste.js' modificados por cada uno según la división de la tarea.

INMA:

Creación de la base de datos, tablas y datos necesarios como: usuarios y categorías (los chistes se introducirán a través de 
la aplicación).
Método GET de presentación de plantilla inicial 'login'
Método POST de búsqueda y comprobación en la base de datos de los usuarios para dar acceso a la plantilla 'index'.

JOSE:

Plantilla 'index' con enlaces a las otras secciones (introducir chistes y listar chistes).
Plantilla 'introducirChiste', a la que se accede desde un enlace de 'index'.
Método GET de acceso a 'index'.
Método GET de presentación de plantilla 'introducirChiste' con un desplegable (select) con las categorías obtenidas de la base 
de datos, requiriendo 'todasCategorias' desde 'modeloChiste'.
Método POST para introducir chistes en la base de datos seleccionando una categoría a partir del select creado en la plantilla.
Una vez introducido nos quedamos en la misma página usando un 'redirect'.
En la plantilla 'introducirChiste' se añade un enlace para volver a la plantilla 'index'.

INÉS:

Plantilla 'listarChiste' con un select para listar las categorías ('listaCategoria' en 'modeloChiste') obtenidas desde la base 
de datos, y al seleccionar una de ellas, imprime por pantalla una lista ordenada de todos los chistes ('consultaChiste' en 
'modeloChiste') con esa categoría (obtenidos de la base datos).
Método GET de acceso a la plantilla 'listarChiste' con un desplegable (select) con las categorías obtenidas de la base 
de datos, requiriendo 'listaCategoria' desde 'modeloChiste'.
Método GET que imprime por pantalla una lista ordenada de todos los chistes ('consultaChiste' en 'modeloChiste') con esa 
categoría (obtenidos de la base datos).
En la plantilla 'listarChiste' se añade un enlace para volver a la plantilla 'index'.
