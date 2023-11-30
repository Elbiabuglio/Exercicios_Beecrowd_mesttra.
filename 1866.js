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
let N;
let X;

for (let i = 0; i < C; i++) {
    N = parseInt(lines.shift());
    X = 0;

    for (let j = 0; j < N; j++) { 
        if (j % 2 == 0) {
            X++;
        } else {
            X--;
        }
    }
    console.log(X); 
}






  