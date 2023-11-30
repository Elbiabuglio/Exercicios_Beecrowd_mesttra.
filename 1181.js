const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const lineToConsider = parseInt(lines[0]);
const operation = lines[1].trim();
const matrix = [];

let index = 2; // Começa na linha que contém os números da matriz

for (let i = 0; i < 12; i++) {
  matrix.push([]);
  const row = lines[index].split(' ');

  for (let j = 0; j < 12; j++) {
    matrix[i].push(parseFloat(row[j]));
  }

  index++;
}

let total = 0;

for (let j = 0; j < 12; j++) {
  total += matrix[lineToConsider][j];
}

let result;
if (operation === 'S') {
  result = total.toFixed(1);
} else if (operation === 'M') {
  result = (total / 12).toFixed(1);
} else {
  result = 'Invalid operation';
}

console.log(result);