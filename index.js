/*
-------------------------------------------------------------------------------------------------
-       Archivo inicial del proyecto.                                                           -
-       Este archivo se encarga de inicializar la aplicación. Solo se utilizará una vez.        -
-------------------------------------------------------------------------------------------------
*/

const app = require('./src/app');//importamos app.js desde src/app/

/*
-------------------------------------------------------------------------------------------------
-    Función que se ejecuta al inicio de nuestra Aplicación.     "Main"                         -
-------------------------------------------------------------------------------------------------
main()              ---> función que se ejecuta al inicio de nuestra aplicación.
app.listen()        ---> función que se ejecuta al inicio de nuestra aplicación.
app.get()           ---> función que se ejecuta al inicio de nuestra aplicación.
console.log()       ---> función que se ejecuta al inicio de nuestra aplicación.
main()              ---> función que se ejecuta al inicio de nuestra aplicación.
main().then(()=>{}) ---> función que se ejecuta al inicio de nuestra aplicación.
*/
async function main(){
    await app.listen(app.get('port'));//escuchamos el puerto de la aplicación.
    console.log('Server on port',app.get('port'));//imprimimos el puerto en el que está escuchando la aplicación.
}
main().then(()=>{});//ejecutamos la función main().