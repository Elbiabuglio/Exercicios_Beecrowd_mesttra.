const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


const vetor = lines.shift().split(' ').map(Number);

const A = vetor[0];
const B = vetor[1];
const C = vetor[2];

switch (true) {
  case (B < A && C >= B):
  case (B > A && C > B && (C - B) >= (B - A)):
  case (B < A && C < B && (B - C) < (A - B)):
  case (B === A && C > B):
    console.log(':)');
    break;
  default:
    console.log(':(');
    break;
}
