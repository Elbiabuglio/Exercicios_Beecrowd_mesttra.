const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let C = parseInt(lines.shift());
let nome;
let N;

for (let i = 0; i < C; i++) {
    nome = lines.shift().split(' ')[0]; // Pega o primeiro nome da entrada
    N = parseInt(lines.shift());

    if (nome.toLowerCase() === "thor") {
        console.log("Y");
    } else {
        console.log("N");
    }
}






  