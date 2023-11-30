const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let salario = parseFloat(lines.shift());

let novoSalario, reajuste, percentual;

if (salario <= 400.00) {
    percentual = 15;
} else if (salario <= 800.00) {
    percentual = 12;
} else if (salario <= 1200.00) {
    percentual = 10;
} else if (salario <= 2000.00) {
    percentual = 7;
} else {
    percentual = 4;
}

reajuste = salario * (percentual / 100);
novoSalario = salario + reajuste;

console.log("Novo salario: " + novoSalario.toFixed(2));
console.log("Reajuste ganho: " + reajuste.toFixed(2));
console.log("Em percentual: " + percentual + " %");