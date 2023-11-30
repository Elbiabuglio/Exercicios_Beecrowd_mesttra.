const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let positivos = 0;
let somaPositivos = 0;

for (let i = 0; i < 6; i++) {
  const valor = parseFloat(lines.shift());
  if (valor > 0) {
    positivos++;
    somaPositivos += valor;
  }
}

console.log(positivos + ' valores positivos');
console.log((somaPositivos / positivos).toFixed(1)); 


