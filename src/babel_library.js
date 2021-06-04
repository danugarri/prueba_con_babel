//este es un fichero de ejemplo con sintaxis de ES6 
// Utilizando la librería de babel lo transformaremos en un fichero ocn sintaxis de ES5
// ****UTILIZAREMOS npm**********
/*comandos :

//estos 2 primeros instalan los paquetes de la librería
npm install babel-cli
npm install babel-preset-env

//y para ejecutar babel escribimos:

npm run build

*/

// el fichero transformado se guarda en la carpeta lib

var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;