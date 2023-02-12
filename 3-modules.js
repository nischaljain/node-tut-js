const names = require("./4-names");
const sayHi = require("./5-utils");
const alternativeFlavours = require("./6-alternative-flavour");
require("./7-mind-grenade");
console.log(names);
sayHi(names.john);
console.log(`Hello there!! ${alternativeFlavours.person.name}`);
