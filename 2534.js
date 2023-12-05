const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let [a, b] = lines.shift().split(" ");
let array = [];

while (lines.length !== 0) {
  for (let i = 0; i < parseInt(a); i++) {
    let avaliacao = lines.shift();
    array.push(avaliacao);
  }

  array.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < parseInt(b); i++) {
    let posicao = lines.shift();
    console.log(array[posicao - 1]);
  }

  if (lines.length === 1) {
    break;
  }

  [a, b] = lines.shift().split(" ");
  array = [];
}
