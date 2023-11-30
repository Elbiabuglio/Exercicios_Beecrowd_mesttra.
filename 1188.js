const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let operation = lines.shift();
let positions = [];

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        if (i > 6 && j > 6 && j < 12 - i) {
            positions.push(i * 12 + j);
        }
    }
}

let sum = 0;
let count = 0;

for (let i = 0; i < 144; i++) {
    let num = parseFloat(lines.shift());
    if (!isNaN(num) && positions.includes(i)) {
        sum += num;
        count++;
    }
}

if (operation == 'S') {
    console.log(sum.toFixed(1));
} else {
    console.log((sum / count).toFixed(1));
}


if (operation == 'S') {
    console.log(sum.toFixed(1));
} else {
    console.log((sum / count).toFixed(1));
}
