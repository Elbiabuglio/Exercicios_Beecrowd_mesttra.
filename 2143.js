const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let index = 0; 

while (index < lines.length) {
    let T = parseInt(lines[index++]);

    if (T === 0) {
        break;
    }

    for (let i = 0; i < T; i++) {
        let N = parseInt(lines[index++]);

        if (N % 2 !== 0) {
            console.log((N * 2) - 1);
        } else {
            console.log((N * 2) - 2);
        }
    }
}