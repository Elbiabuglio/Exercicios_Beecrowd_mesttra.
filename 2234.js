const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let T = parseInt(lines.shift());
let B, A1, D1, L1, A2, D2, L2, V1, V2;

for (let i = 0; i < T; i++) {
    B = parseInt(lines.shift());
    [A1, D1, L1] = lines.shift().split(" ").map(Number);
    [A2, D2, L2] = lines.shift().split(" ").map(Number);

    V1 = ((A1 + D1) / 2) + (L1 % 2 === 0 ? B : 0);
    V2 = ((A2 + D2) / 2) + (L2 % 2 === 0 ? B : 0);

    if (V1 > V2) {
        console.log("Dabriel");
    } else if (V2 > V1) {
        console.log("Guarte");
    } else {
        console.log("Empate");
    }
}



