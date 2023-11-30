const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const n = parseInt(process.argv[2]);
const c = process.argv[3];
const a = [];

let argIndex = 4;

for (let i = 0; i < 12; i++) {
  a[i] = [];

  for (let j = 0; j < 12; j++) {
    a[i][j] = parseFloat(process.argv[argIndex]);
    argIndex++;
  }
}

let sum = 0;

for (let i = 0; i < 12; i++) {
  sum += a[i][n];
}

if (c === 'S') {
  console.log(sum.toFixed(1));
} else if (c === 'M') {
  console.log((sum / 12).toFixed(1));
} else {
  console.log('Invalid operation');
}