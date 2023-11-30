const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const T = parseInt(lines.shift());
const nomes = ["tesoura", "papel", "pedra", "lagarto", "Spock"];

for (let i = 1; i <= T; i++) {
  const S = lines.shift().split(" "); // Lê e divide a entrada em duas partes
  const A = nomes.indexOf(S[0]);
  const B = nomes.indexOf(S[1]);
  const C = (B - A + 5) % 5;
  let resultado;

  if (C === 0) {
    resultado = "De novo";
  } else if (C % 2 === 1) {
    resultado = "Bazinga";
  } else {
    resultado = "Raj trapaceou";
  }

  console.log(`Caso #${i}: ${resultado}!`);
}
