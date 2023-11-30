const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let [X, Y] = lines.shift().split(" ").map(Number);
let cont = 0;

for (let i = 1; i <= Y; i++) {
    cont +=1;

    if ( cont== X) {
    console.log(i);
    cont = 0;
 
 } else {
    process.stdout.write(i+ " ");
    }

 }


  

 





