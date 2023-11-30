const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let X = parseInt(lines[0]);
let Y = parseInt(lines[1]);



if (X > Y) {
  const divisivel = X;
  X = Y;
  Y = divisivel;
}

for (let i = X + 1; i < Y; i++) {
  if ((i % 5 == 2) || (i % 5 == 3 )) {
    console.log(i);
  }
}






