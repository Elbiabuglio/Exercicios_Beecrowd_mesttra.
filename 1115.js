const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let index = 0;

while (true) {
  const [x, y] = lines[index++].split(' ').map(Number);

  if (x === 0 || y === 0) {
    break;
  }
  else if (x > 0 && y > 0){
    console.log("primeiro");
  }
  else if (x > 0 && y < 0){
    console.log("quarto");
  }
  else if (x < 0 && y < 0){
    console.log("terceiro");
  }
  else {
    console.log("segundo");
  }
}