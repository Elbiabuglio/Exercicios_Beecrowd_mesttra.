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
let jogador1;
let jogador2;

for (let i = 0; i < N; i++) {
    jogador1 = lines.shift().toLowerCase();
    jogador2 = lines.shift().toLowerCase();

    if (jogador1 === "ataque" && jogador2 === "ataque") {
        console.log("Aniquilacao mutua");
    } else if (jogador1 === "papel" && jogador2 === "papel") {
        console.log("Ambos venceram");
    } else if (jogador1 === "ataque") {
        console.log("Jogador 1 venceu");
    } else if (jogador2 === "ataque") {
        console.log("Jogador 2 venceu");
    } else if (jogador2 === "papel") {
        console.log("Jogador 1 venceu");
    } else if (jogador1 === "papel") {
        console.log("Jogador 2 venceu");
    } else {
        console.log("Sem ganhador");
    }
}
