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
for (let cases = 1; true; cases++) {
  let number = parseInt(prompt());
  if (isNaN(number)) {
    break;
  }

  let sequence = [0];

  for (let i = 1; i <= number; i++) {
    for (let n = 0; n < i; n++) {
      sequence.push(i);
    }
  }

  if (sequence.length == 1) {
    console.log("Caso " + cases + ": " + sequence.length + " numero");
  } else {
    console.log("Caso " + cases + ": " + sequence.length + " numeros");
  }
  console.log(sequence.join(" "));
  console.log("");
}
