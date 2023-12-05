const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


while (true) {
  let casos = parseInt(prompt());
  if (isNaN(casos)) {
    break;
  }
  let somaNotas = 0;
  let somaCargaHoraria = 0;

  for (let i = 0; i < casos; i++) {
    let [nota, cargaHoraria] = prompt().split(" ").map(Number);
    somaNotas += nota * cargaHoraria;
    somaCargaHoraria += cargaHoraria;
  }

  let API = somaNotas / (somaCargaHoraria * 100);
  console.log(API.toFixed(4));
}



