const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let n = parseInt(lines.shift());
let sequence = lines.shift().split(" ").map(Number);

for (let i = 2; i <= 5; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
        if (sequence[j] % i === 0) {
            count++;
        }
    }

    console.log(`${count} Multiplo(s) de ${i}`);
}
