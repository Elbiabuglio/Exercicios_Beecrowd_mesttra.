const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let contador = parseInt(lines.shift());
let vetor = []; // Cria um array vazio chamado 'vetor' para armazenamento temporário
let matriz = []; // Cria um array vazio chamado 'matriz' para armazenar as linhas da matriz

while (contador !== 0) { // Inicia um loop que continua até 'contador' ser igual a zero
  matriz = new Array(contador); // Cria um novo array 'matriz' com 'contador' linhas
  for (let linha = 0; linha < contador / 2; linha++) { // Loop para construir a matriz
    vetor = new Array(contador); // Cria um novo array 'vetor' com 'contador' colunas
    for (let coluna = 0; coluna < contador / 2; coluna++) { // Loop para preencher os valores nas colunas
      const valor = Math.min(linha, coluna) + 1; // Calcula o valor a ser colocado na posição (linha, coluna)
      vetor[coluna] = valor < 10 ? ` ${valor}` : `${valor}`; // Formata e armazena o valor no vetor
      vetor[contador - 1 - coluna] = vetor[coluna]; // Preenche simetricamente na posição oposta
    }

    matriz[linha] = ` ${vetor.join('  ')}`; // Formata a linha da matriz e a armazena em 'matriz'
    matriz[contador - 1 - linha] = matriz[linha]; // Preenche simetricamente na posição oposta da matriz
  }
  
  console.log(`${matriz.join('\n')}`); // Imprime a matriz formatada no console, separando as linhas com quebras de linha

  contador = parseInt(lines.shift()); // Lê o próximo valor da entrada para atualizar 'contador'
  console.log(''); // Imprime uma linha em branco para separar as matrizes na saída
}





