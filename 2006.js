const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const T = lines.shift().trim();
const [A,B,C,D,E] = lines.shift().trim().split(" ");
let cont = 0;

if(T == A){
    cont++;
}
if(T == B){
    cont++;
}
if(T == C){
    cont++;
}
if(T == D){
    cont++;
}
if(T == E){
    cont++;
}

console.log(cont);



