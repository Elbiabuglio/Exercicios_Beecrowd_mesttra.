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
let Z = parseInt(lines.shift());

while(Z <= X){
   Z = parseInt(lines.shift());}

let soma = 0;
let cnt = 1;

for (let i = X; i < Z; i++){
    soma += i;
    if (soma < Z){
        cnt += 1;
    }
}
console.log(cnt);



  

 





