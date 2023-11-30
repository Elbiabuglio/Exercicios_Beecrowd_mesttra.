const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let lista = [];

for (let i = 0; i < 10; i++) {
    let N = Number(lines.shift());
    lista.push(N <= 0 ? 1 : N);
}

for (let l = 0; l < 10; l++) {
    console.log(`X[${l}] = ${lista[l]}`);
}

 





