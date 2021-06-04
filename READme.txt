PASOS PARA EJECUTAR PROYECTO con BABEL
******PASO 1********

Para comenzar debemos crear un una carpeta llamada src en el root de nuestro proyecto, es decir, en la carpeta principal

***PASO 2*******
escribir npm init 
en el terminal situándonos en la carpeta principal

***PASO 3 ****

Instalar los paquetes de babel dentro de package.json

escribimos:
npm install babel-cli // este paquete contiene herramientas para la línea de comandos
npm install babel-preset-env //este paquete contiene las funcionalidades para hacer la conversión / transpile

Además como queremos que los paquetes se introduzcan dentro de la propiedad devDependencies del objeto json
debemos utilizar -D junto con el comando anterior:

npm install babel-cli -d
npm install babel-preset-env -d

****PASO 4*******

Crear fichero .babelrc en el root y dentro de este fichero crear un objeto literal que contenga :

{
    "presets": ["env"]
}

con la propiedad presets y el valor "env" indicamos que el fichero de js que queremos transformar tiene la versión 
ES6 o superior

*****PASO 5*****

dentro de package.json y dentro de la propiedad "scripts" debemos crear otro script llamado "build"
esta propiedad debe tener el valor : "babel src -d lib"

"build": "babel src -d lib"


***PASO 6***

Ya sólo nos queda ejecutar el comando 
npm run build

así le decimos a node que ejecute el script "build" dentro de package.json
