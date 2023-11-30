const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
const number = parseFloat(lines[0]);
const N = new Array(100);
N[0] = number.toFixed(4);

for (let i = 1; i < 100; i++) {
  N[i] = (N[i - 1] / 2).toFixed(4);
}

for (let i = 0; i < 100; i++) {
  console.log(`N[${i}] = ${N[i]}`);
}