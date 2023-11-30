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
let C = new Array(N).fill(0).map(() => new Array(N).fill(0));

for (let i = 0; i < N; i++) {
    C[i] = lines.shift().split(' ').map(Number);
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (isSafeZone(C, i, j)) {
            process.stdout.write("S");
        } else {
            process.stdout.write("U");
        }
    }
    console.log("");
}

function isSafeZone(mat, i, j) {
    let cont = 0;

    if (mat[i][j] === 1) cont++;
    if (i + 1 < N && mat[i + 1][j] === 1) cont++;
    if (j + 1 < N && mat[i][j + 1] === 1) cont++;
    if (i + 1 < N && j + 1 < N && mat[i + 1][j + 1] === 1) cont++;

    return cont <= 1;
}


