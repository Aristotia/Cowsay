const cowSentence = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${cowSentence.completename} from ${cowSentence.campus}`,
    e : "oO",
    T : "U "
}));