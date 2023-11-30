const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const O = lines[0].toUpperCase();
const M = [];

for (let i = 1; i <= 12; i++) {
    M.push(lines[i].split(' ').map(Number));
}

let soma = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        if (j > i) {
            soma += M[i][j];
        }
    }
}

if (O === 'M') {
    soma /= 66;
}

console.log(soma.toFixed(1));