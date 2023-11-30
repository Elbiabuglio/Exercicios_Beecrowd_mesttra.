
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let notaExame = lines.shift();   

let [codigoItem, quantidade] = lines.shift().split(" "); 

codigoItem = parseInt(codigoItem);
quantidade = parseInt(quantidade);

let total;

if (codigoItem == 1) {
    total = quantidade * 4.00;
} else if (codigoItem == 2) {
    total = quantidade * 4.50;
} else if (codigoItem == 3) {
    total = quantidade * 5.00;
} else if (codigoItem == 4) {
    total = quantidade * 2.00;
} else if (codigoItem == 5) {
    total = quantidade * 1.50;
}

console.log("Total: R$ " + total.toFixed(2));








