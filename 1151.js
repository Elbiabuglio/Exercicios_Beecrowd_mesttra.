const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let N = parseInt(lines.shift()); // Lê o valor de N a partir da entrada

let array = [0, 1]; // Inicializa um array com os dois primeiros termos da sequência de Fibonacci

for (let i = 2; i < N; i++) {
    // Gera a sequência de Fibonacci até o N-ésimo termo
    array.push(array[i - 1] + array[i - 2]);
}

for (let i = 0; i < N; i++) {
    // Itera pelos termos da sequência gerada e imprime-os
    if (i === (N - 1)) {
        console.log(array[i]); // Se for o último termo, imprime com quebra de linha
    } else {
        process.stdout.write(array[i] + " "); // Caso contrário, imprime com um espaço em branco
    }
}


  

 





