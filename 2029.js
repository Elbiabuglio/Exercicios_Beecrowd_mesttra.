const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

do{
  let volume = lines.shift();
  let diametro = lines.shift();

  altura = volume / (Math.pow((diametro / 2),2) * 3.14);
  area = Math.pow((diametro / 2),2)  * 3.14;

  console.log(`ALTURA = ${altura.toFixed(2)}\nAREA = ${area.toFixed(2)}`);

}while(0 < lines.length);

