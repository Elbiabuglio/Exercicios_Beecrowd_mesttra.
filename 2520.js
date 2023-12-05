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
  let inpt = prompt().split("");
  if (isNaN(inpt[0])) {
    break;
  }
  let [row, column] = inpt.join("").split(" ").map(Number);
  let x1;
  let y1;
  let x2;
  let y2;

  for (let r = 0; r < row; r++) {
    let aux = prompt().split(" ").map(Number);

    if (aux.indexOf(1) > -1) {
      x1 = aux.indexOf(1);
      y1 = r;
    }
    if (aux.indexOf(2) > -1) {
      x2 = aux.indexOf(2);
      y2 = r;
    }
  }

  let path = Math.abs(x2 - x1) + Math.abs(y2 - y1);
  console.log(path);
}
