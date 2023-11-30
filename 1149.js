const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let sep = [' ', '\n'];

let line = input.split(new RegExp(sep.join('|'), 'g'));

let A = parseInt(line.shift());
let N = parseInt(line.shift());

while(N <= 0){ 
  N = parseInt(line.shift());}

let soma = 0;
for (let i = 0; i < N; i++){
    soma += i + A;
}
console.log(soma);
