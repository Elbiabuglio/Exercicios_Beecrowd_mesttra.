const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let N = parseInt(lines.shift());
console.log(N);

let notas100 = Math.floor(N / 100);
N %= 100;

let notas50 = Math.floor(N / 50);
N %= 50;

let notas20 = Math.floor(N / 20);
N %= 20;

let notas10 = Math.floor(N / 10);
N %= 10;

let notas5 = Math.floor(N / 5);
N %= 5;

let notas2 = Math.floor(N / 2);
N %= 2;

let notas1 = Math.floor(N / 1);

console.log(notas100 + " nota(s) de R$ 100,00");
console.log(notas50 + " nota(s) de R$ 50,00");
console.log(notas20 + " nota(s) de R$ 20,00");
console.log(notas10 + " nota(s) de R$ 10,00");
console.log(notas5 + " nota(s) de R$ 5,00");
console.log(notas2 + " nota(s) de R$ 2,00");
console.log(notas1 + " nota(s) de R$ 1,00");
