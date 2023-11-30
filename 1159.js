const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let X = parseInt(lines.shift());

while (X !== 0) {
    let soma = 0;

    for (let i = X; i < X + 10; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    console.log(soma);

    X = parseInt(lines.shift()); 
}
 
   




      


  

 





