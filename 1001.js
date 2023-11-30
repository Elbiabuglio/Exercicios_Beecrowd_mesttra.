


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = lines.shift();

lines = lines[0].split(" ");

let a;
let b;
let x;

console.log(lines);

a = parseInt(lines[0]);
b = parseInt(lines[1]);

x = a + b;

console.log("X = " + x);