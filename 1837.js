const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question('', (line) => {
    const [A, B] = line.split(' ').map((value) => Number.parseInt(value, 10));

    let [quoc, rest] = [Math.trunc(A / B), A % B];

    if (A < 0) {
      for (rest = 0; rest < Math.abs(B); rest += 1) {
        if ((A - rest) % B == 0) break;
      }
      quoc = (A - rest) / B;
    }

    console.log(`${quoc} ${rest}`);
    rl.close();
  });
}

main();



