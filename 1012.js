const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [A, B, C] = lines.shift().split(" "); 
let pi = 3.14159;
//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let notaExame = lines.shift();   

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

let calcularTriangulo = (A * C)/2;
let calcularCirculo = pi * Math.pow(C, 2);
let calcularTrapezio = (A + B) * (C /2);
let calcularQuadrado = Math.pow(B, 2);
let calcularRetangulo = A * B;

console.log("TRIANGULO: " + calcularTriangulo.toFixed(3));
console.log("CIRCULO: " + calcularCirculo.toFixed(3));
console.log("TRAPEZIO: " + calcularTrapezio.toFixed(3));
console.log("QUADRADO: " + calcularQuadrado.toFixed(3));
console.log("RETANGULO: " + calcularRetangulo.toFixed(3));