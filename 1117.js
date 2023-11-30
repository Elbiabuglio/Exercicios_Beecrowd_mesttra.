const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


const notas = [];
let notasValidas = 0;

for (let i = 0; i < lines.length && notasValidas < 2; i++) {
  const nota = parseFloat(lines[i]);

  if (nota < 0 || nota > 10) {
    console.log('nota invalida');
  } else {
    notasValidas++;
    notas.push(nota);
  }
}

if (notasValidas === 2) {
  const media = (notas[0] + notas[1]) / 2;
  console.log(`media = ${media.toFixed(2)}`);
}















