const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let number = parseInt(lines.shift());
let i = 0;
let SumA = 0;
let SumB = 0;
let SumS = 0;
let SumA1 = 0;
let SumB1 = 0;
let SumS1 = 0;

while(i < number){
  let name = lines.shift();
  let [S, B, A] = lines.shift().split(" ");
  let [S1, B1, A1] = lines.shift().split(" ");

  
  SumA += parseInt(A);
  SumB += parseInt(B);
  SumS += parseInt(S);
  SumA1 += parseInt(A1);
  SumB1 += parseInt(B1);
  SumS1 += parseInt(S1);
  i++;
}


console.log(`Pontos de Saque: ${((SumS1 * 100) / SumS).toFixed(2)} %.\nPontos de Bloqueio: ${((SumB1 * 100) / SumB).toFixed(2)} %.\nPontos de Ataque: ${((SumA1 * 100) / SumA).toFixed(2)} %.`)
