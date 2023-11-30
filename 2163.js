const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let X = 0;
let Z = 0;
let N = parseInt(lines.shift());
let M = parseInt(lines.shift());
let T = new Array(N);

for (let i = 0; i < N; i++) {
    T[i] = new Array(M);
    for (let j = 0; j < M; j++) {
        T[i][j] = parseInt(lines.shift());
    }
}

function isTheSword(mat, i, j) {
    return (
        mat[i - 1][j - 1] === 7 &&
        mat[i - 1][j] === 7 &&
        mat[i - 1][j + 1] === 7 &&
        mat[i][j - 1] === 7 &&
        mat[i][j] === 42 &&
        mat[i][j + 1] === 7 &&
        mat[i + 1][j - 1] === 7 &&
        mat[i + 1][j] === 7 &&
        mat[i + 1][j + 1] === 7
    );
}

for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < M - 1; j++) {
        if (isTheSword(T, i, j)) {
            console.log(i + 1 + " " + (j + 1));
            process.exit(0);
        }
    }
}

console.log("0 0");


