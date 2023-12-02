const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const numbers = lines.shift().split(" ");
numbers.sort((a, b) => b - a);

const [a, b, c] = numbers.map(parseFloat);

if (a >= b + c) {
    console.log("Invalido");
} else {
    if (a === b && b === c) {
        console.log("Valido-Equilatero");
    } else if (a === b || a === c || b === c) {
        console.log("Valido-Isoceles");
    } else {
        console.log("Valido-Escaleno");
    }

    if (a ** 2 === b ** 2 + c ** 2) {
        console.log("Retangulo: S");
    } else {
        console.log("Retangulo: N");
    }
}
