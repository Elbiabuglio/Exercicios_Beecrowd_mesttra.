const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let notas = [2, 5, 10, 20, 50, 100];
let cont = 0;

while (true) {
    let [N, M] = lines.shift().split(" ");
    cont = 0;

    // Converter strings para números inteiros
    N = parseInt(N);
    M = parseInt(M);

    if (N === 0 && M === 0) {
        break;
    }

    let troco = M - N;
    let possivel = false;

    for (let i = 0; i < 6; i++) {
        if (troco % notas[i] === 0) {
            possivel = true;
            break;
        }
    }

    if (possivel) {
        console.log("possible");
    } else {
        console.log("impossible");
    }
}


