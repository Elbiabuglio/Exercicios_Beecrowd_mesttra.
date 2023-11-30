const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let Fib = [0,1];
let N = 0; let T = 1;
for (let i = 0; i < 60; i++) {
    let X = T + N;
    Fib.push (X);
    N = T;
    T = X;
}
let Y = parseInt(lines.shift());
for (let i = 0; i < Y; i++) {
    let H = parseInt(lines.shift());
    console.log (`Fib(${H}) = ${Fib[H]}`);
}
