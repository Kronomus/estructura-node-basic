/*
-------------------------------------------------------------------------------------------------
-    Bloque de inicialización de express para que el proyecto pueda funcionar correctamente.    -
-------------------------------------------------------------------------------------------------
*/
const express   = require('express'); //importamos express para poder usarlo
const app       = express();          //creamos una instancia de express
const path      = require('path');    //importamos path para poder utilizar las rutas de los archivos
/*
-------------------------------------------------------------------------------------------------
-                       Configuraciones iniciales de la aplicación "Setting".                   -
-------------------------------------------------------------------------------------------------
port          ---> puerto en el que se ejecutará la aplicación.
path.join()   ---> unir directorios y archivos.
views         ---> directorio donde se encuentran las vistas
engine        ---> motor de plantillas que se utilizará para las vistas
pug           ---> motor de plantillas pug
app.set()     ---> configurar una propiedad de la aplicación.
*/
app.set('port',3000);//configuramos el puerto de la aplicación
app.set('views',path.join(__dirname,'views'));//configuramos la ruta de las vistas
app.set('view engine','pug');//configuramos el motor de vistas
/*
-------------------------------------------------------------------------------------------------
-         funciones que se ejecutan antes de que lleguen las rutas "Middleware".                -
-------------------------------------------------------------------------------------------------
*/



/*
-------------------------------------------------------------------------------------------------
-                               rutas de la aplicación "Routes".                                -
-------------------------------------------------------------------------------------------------
*/


/*
-------------------------------------------------------------------------------------------------
-                             archivos estáticos "Static files".                                -
-------------------------------------------------------------------------------------------------
*/
app.use(express.static(path.join(__dirname,'public')));//configuramos la ruta de los archivos estáticos


/*
-------------------------------------------------------------------------------------------------
-                                Módulo que se desean exportan "Exports".                       -
-------------------------------------------------------------------------------------------------
*/
module.exports = app; //exportamos app para que sea accesible desde otras partes del proyecto.