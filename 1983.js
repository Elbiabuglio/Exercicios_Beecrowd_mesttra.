const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let N = parseInt(lines.shift());
let matriculaMaiorNota = 0;
let maiorNota = 0;

for (let i = 0; i < N; i++) {
    let matricula = parseInt(lines.shift());
    let nota = parseFloat(lines.shift());

    if (nota > maiorNota && nota >= 8) {
        maiorNota = nota;
        matriculaMaiorNota = matricula;
    }
}

if (maiorNota >= 8) {
    console.log(matriculaMaiorNota);
} else {
    console.log("Minimum note not reached");
}
