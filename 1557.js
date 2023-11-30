const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

// Define uma função chamada 'prompt' que retorna o próximo elemento do array 'lines'
let prompt = function(texto) { return lines.shift(); };

// Lê um valor inteiro da entrada e armazena-o na variável 'size'
let size = parseInt(prompt());

// Entra em um loop 'while' que continuará enquanto 'size' for maior que zero
while (size > 0) {
  // Calcula 'T' como 4 elevado à potência ('size' - 1)
  let T = Math.pow(4, size - 1);
  // Calcula o número de dígitos em 'T'
  T = T.toFixed(0).length;

  // Inicia um loop 'for' para controlar as linhas da matriz
  for (let Linha = 0; Linha < size; Linha++) {
    // Cria um array vazio chamado 'line' para armazenar os números da linha
    let line = [];

    // Inicia um loop 'for' para controlar as colunas da matriz
    for (let Coluna = 0; Coluna < size; Coluna++) {
      // Calcula 'aux' como 2 elevado à potência ('Linha' + 'Coluna')
      let aux = Math.pow(2, Linha + Coluna).toFixed(0);
      
      // Formata 'aux' para ter a mesma largura de 'T' preenchendo com zeros à esquerda, se necessário
      line.push(aux.padStart(T));
    }

    // Imprime a linha atual como uma string separada por espaços
    console.log(line.join(" "));
  }

  // Imprime uma linha em branco para separar os casos de teste
  console.log("");

  // Lê o próximo valor de 'size' da entrada para continuar o loop ou encerrá-lo
  size = parseInt(prompt());
}





