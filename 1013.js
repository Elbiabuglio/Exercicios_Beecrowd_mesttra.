const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir


//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let notaExame = lines.shift();   

let [a, b, c] = lines.shift().split(" "); 

let maiorAB = (a + b + Math.abs(a-b)) / 2;
let maior = Math.max(a, b, c);

console.log(maior + " eh o maior");
