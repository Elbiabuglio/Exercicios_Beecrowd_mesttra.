const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

// Define uma função chamada 'prompt' que retorna o próximo elemento do array 'lines'

let brasil = lines.shift();

while(lines.length != 0) {

  if(brasil == 0) {
      
    console.log ("vai ter copa!");

  } else {
    console.log("vai ter duas!");
  }

  brasil = lines.shift();
  
}