const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let prompt = function(texto) { return lines.shift();};


while (true) {
  let size = parseInt(prompt());
  if (isNaN(size)) {
    break;
  }

  for (let i = 0; i < size; i++) {
    let line = [];

    for (let n = 0; n < size; n++) {
      let aux = 0;
      if (i == n) {
        aux = 2;
      }
      if (i + n + 1 == size) {
        aux = 3;
      }
      if (
        i >= Math.trunc(size / 3) &&
        n >= Math.trunc(size / 3) &&
        i < size - Math.trunc(size / 3) &&
        n < size - Math.trunc(size / 3)
      ) {
        aux = 1;
      }
      if (
        i == Math.trunc(size / 2) &&
        n == Math.trunc(size / 2) &&
        size % 2 == 1
      ) {
        aux = 4;
      }
      line.push(aux);
    }

    console.log(line.join(""));
  }

  console.log("");
}