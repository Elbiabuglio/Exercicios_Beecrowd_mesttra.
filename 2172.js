const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let X = parseInt(lines.shift());
let M = parseInt(lines.shift());
let totalXP;

while (M !== 0 && X !== 0) {
    // Realiza o cálculo e imprime o resultado
    totalXP = X * M;
    console.log(totalXP);

    // Obtém os próximos valores de X e M
    X = parseInt(lines.shift());
    M = parseInt(lines.shift());
}

    