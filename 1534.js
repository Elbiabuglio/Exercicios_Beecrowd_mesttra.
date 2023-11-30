const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

function printBidimensionalArray(N) {
  const arr = new Array(N).fill().map(() => new Array(N).fill(0));
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let num = 1;
  let direction = 0;
  let row = 0;
  let col = 0;

  for (let layer = 0; layer <= Math.floor(N / 2); layer++) {
    for (let _ = 0; _ < N - 2 * layer; _++) {
      arr[row][col] = num;
      num = (num % 3) + 1;
      row += directions[direction][0];
      col += directions[direction][1];
    }
    direction = (direction + 1) % 4;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      process.stdout.write(arr[i][j].toString());
    }
    console.log('');
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const testCases = input.map(Number);
  for (let i = 0; i < testCases.length; i++) {
    printBidimensionalArray(testCases[i]);
    if (i < testCases.length - 1) {
      console.log('');
    }
  }
});
