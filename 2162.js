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
let H = new Array(N);
let padrao = 1; // Inicialmente, assumimos que há um padrão

for (let i = 0; i < N; i++) {
    H[i] = parseInt(lines.shift());
}

if (N > 2) {
    for (let i = 2; i < N; i++) {
        if (!((H[i - 2] > H[i - 1] && H[i - 1] < H[i]) || (H[i - 2] < H[i - 1] && H[i - 1] > H[i]))) {
            padrao = 0;
            break; // Se não houver padrão, podemos sair do loop
        }
    }
} else if (N === 2) {
    if (H[0] === H[1]) {
        padrao = 0; // Se houver apenas dois elementos iguais, não há padrão
    }
}

console.log(padrao);


