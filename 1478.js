const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let N = parseInt(lines.shift());

while (N !== 0) {
  for (let i = 1; i <= N; i++) {
    let row = ''; // Inicializa uma string vazia para a linha atual

    for (let j = 1; j <= N; j++) {
      let value = Math.abs(i - j) + 1; // Calcula o valor com base na diferença entre i e j
      row += value.toString().padStart(3, ' '); // Adiciona o valor à linha formatado com 3 caracteres
      
      if (j < N) row += ' '; // Adiciona um espaço entre os valores, exceto após o último valor
    }
    console.log(row); // Imprime a linha completa
  }

  console.log(); // Adiciona uma linha em branco para separar os padrões
  
  N = parseInt(lines.shift()); // Lê o próximo valor de N da entrada
}





