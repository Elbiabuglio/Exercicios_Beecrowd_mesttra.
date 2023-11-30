const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let N = lines.shift().split(" ");
let R = lines.shift().split(" ");
let queda = 0;

// Preenche o array R com valores convertidos para número
for (let i = 0; i < N; i++) {
    R[i] = parseInt(lines.shift()); // Converte para número
}

// Procura por quedas no array R
for (let i = 0; i < N - 1; i++) {
    if (R[i] > R[i + 1]) {
        queda = i + 2;
        break;
    }
}

console.log(queda);
