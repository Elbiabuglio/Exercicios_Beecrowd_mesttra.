const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let prompt = function(texto) { return texto.shift(); };
let N = parseInt(prompt(lines));
let estrela = new Array(N);
let carneiro = prompt(lines).split(" ").map(Number);
let totalEstrela = 0;
let totalCarneiro = 0;

for (let i = 0; i < N; i++) {
    estrela[i] = 0;
}

let j = 0;

while (true) {
    if (j == 0 && carneiro[j] % 2 == 0) {
        estrela[j] = 1;
        if (carneiro[j] > 0) carneiro[j]--;
        break;
    } else if (j == (N - 1) && carneiro[j] % 2 == 1) {
        estrela[j] = 1;
        if (carneiro[j] > 0) carneiro[j]--;
        break;
    } else if (carneiro[j] % 2 == 1) {
        if (carneiro[j] > 0) carneiro[j]--;
        estrela[j] = 1;
        j++;
    } else if (carneiro[j] % 2 == 0) {
        estrela[j] = 1;
        if (carneiro[j] > 0) carneiro[j]--;
        j--;
    }
}

for (let i = 0; i < N; i++) {
    totalCarneiro += carneiro[i];
    totalEstrela += estrela[i];
}

console.log(totalEstrela + " " + totalCarneiro);
