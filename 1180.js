const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let n = Number(lines.shift());
let numeros = lines.shift().split(" ");
let menor = 0; 
let posMenor = 0;
for(let i = 0; i < n; i++){
    x = parseInt(numeros[i]);
    if(i===0) {
        menor = x; posMenor = i;
    } 
    else if(x < menor){ 
        menor = x; 
        posMenor = i;
    }
}
console.log(`Menor valor: ${menor}
Posicao: ${posMenor}`);
