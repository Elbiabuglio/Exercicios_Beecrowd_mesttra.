const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) { 
    let X = parseInt(lines[i]);
  
    if (X === 0) {
      console.log("NULL");

    } else if (X > 0 && X % 2 === 0) {
      console.log("EVEN POSITIVE");

    } else if (X > 0 && X % 2 !== 0) {
      console.log("ODD POSITIVE");

    } else if (X < 0 && X % 2 === 0) {
      console.log("EVEN NEGATIVE");

    } else {
      console.log("ODD NEGATIVE");
    }
  }
  
  






