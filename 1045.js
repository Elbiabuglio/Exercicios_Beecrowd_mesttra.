
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//para ler linhas com um unico valor na mesma linha use o comando a seguir
  

let [A, B, C] = lines.shift().split(" ").map(Number);

let decres = [A, B, C].sort((a, b) => b - a);
[A, B, C] = decres;

if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (A * A === B * B + C * C) { 
        console.log("TRIANGULO RETANGULO");
    }
    if (A * A > B * B + C * C) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (A * A < B * B + C * C) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A === B && B === C) {
        console.log("TRIANGULO EQUILATERO");
    } else if (A === B || B === C || A === C) {
        console.log("TRIANGULO ISOSCELES");
    }
}




 



