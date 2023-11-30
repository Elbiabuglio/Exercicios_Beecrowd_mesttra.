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
let imposto;

if (salario <= 2000.00) {
    console.log("Isento");

} else if (salario <= 3000.00) {
    imposto = (salario - 2000.00) * 0.08;
    console.log("R$ " + imposto.toFixed(2));

} else if (salario <= 4500.00) {
    imposto = 1000.00 * 0.08 + (salario - 3000.00) * 0.18;
    console.log("R$ " + imposto.toFixed(2));

} else {
    imposto = 1000 * 0.08 + 1500 * 0.18 + (salario - 4500.00) * 0.28;
    console.log("R$ " + imposto.toFixed(2));
}

