// a module is just a Node.js file
// when we want to use code contained in other modules/files we need to use the require() function
// requiring the path module which ships with Node.js
// loading the path module into the path variable
// require is a function that is available to all objects because it is a method of the global object
const path = require("path");

console.log(`The file name is ${path.basename(__filename)}`);
