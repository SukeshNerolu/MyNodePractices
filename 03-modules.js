// CommonJS,, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavour')
require('./07-mind-granade')
// console.log(data)

sayHi('Sukesh')
sayHi(names.John)
sayHi(names.peter)