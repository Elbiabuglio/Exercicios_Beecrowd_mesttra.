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
let posicao = [];
let valor = 0;
for(let i = 0; i < 5; i++){
   valor = i * 12;
   for(let j = i+1;  j < 11-i; j++){
       posicao.push(valor + j);
   }
}
let soma = 0;
let cont = 0;

for(let i = 0; i < 144; i++){
    let num = parseFloat(lines.shift());
    if(posicao.indexOf(i)!=-1){
        soma += num;
        cont++;
    }
}