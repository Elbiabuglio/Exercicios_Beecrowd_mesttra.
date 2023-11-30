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
let in1 = 0;
let out1 = 0

for (let i = 0 + 1; i <= N; i++) { 
  let x = parseInt(lines[i]);

  if ( x >= 10 && x <= 20) {
    in1++;

  } else {
    out1++;
  }
}
console.log(in1 + " in");
console.log(out1 + " out");




