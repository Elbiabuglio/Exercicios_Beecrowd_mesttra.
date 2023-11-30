const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let N = parseInt(lines.shift());
let numeros = lines.shift().split(' ').map(Number);
let menor = numeros[0];
let posMenor = 1;

for (let i = 1; i < N; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
    posMenor = i + 1; 
  }
}

console.log(posMenor);


  