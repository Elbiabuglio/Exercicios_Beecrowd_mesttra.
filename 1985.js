const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let p = parseInt(lines.shift());
let total = 0;
let q, c;

for (let i = 0; i < p; i++) {
    const entry = lines.shift().split(" ");
    c = parseInt(entry[0]);
    q = parseInt(entry[1]);

    switch (c) {
        case 1001: total += q * 1.50; break;
        case 1002: total += q * 2.50; break;
        case 1003: total += q * 3.50; break;
        case 1004: total += q * 4.50; break;
        case 1005: total += q * 5.50; break;
    }
}

console.log(total.toFixed(2));

    