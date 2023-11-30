const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let X = [];
for (let i = 0; i < 100; i++){
    let N = parseFloat(lines.shift());
    X.push(N);
}

for (let i = 0; i < 100; i++){
    if(X[i] <= 10){
        console.log(`A[${i}] = ${(X[i]).toFixed(1)}`);
    }
}


  

 





