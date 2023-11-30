const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let numero;
let grito;

for (let i = 0; i < 3; i++) {
  numero = 0;
  grito = 0;

  while (grito === 0) {
    const corvo = lines.shift();

    switch (corvo) {
      case "--*":
        numero += 1;
        break;
      case "-*-":
        numero += 2;
        break;
      case "-**":
        numero += 3;
        break;
      case "*--":
        numero += 4;
        break;
      case "*-*":
        numero += 5;
        break;
      case "**-":
        numero += 6;
        break;
      case "***":
        numero += 7;
        break;
      default:
        grito = 1;
        break;
    }
  }
  
  console.log(numero);
}
