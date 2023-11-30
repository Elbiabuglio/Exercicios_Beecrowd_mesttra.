const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

function main() {
    let i = 0;
    let j = 1;

    while (i <= 2) {
        for (let k = 0; k < 3; k++) {
            if (i.toFixed(1).endsWith("0")) {
                console.log("I=" + i.toFixed(0).substring(0, 1) + " J=" + j.toFixed(0).substring(0, 1));
            } else {
                console.log("I=" + i.toFixed(1) + " J=" + j.toFixed(1));
            }
            j++;
        }
        j -= 3;
        j += 0.2;
        i += 0.2;
    }
}

main();








  






