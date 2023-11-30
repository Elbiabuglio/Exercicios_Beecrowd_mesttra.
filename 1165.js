const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let X = Number(lines.shift());

function isPrime(N) {
    if (N <= 1) return false;
    for (let i = 2; i * i <= N; i++) {
        if (N % i === 0) return false;
    }
    return true;
}

for (let l = 0; l < X; l++) {
    let N = Number(lines.shift());
    const message = isPrime(N) ? `${N} eh primo` : `${N} nao eh primo`;
    console.log(message);
}
