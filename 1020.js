const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let idade = parseInt(lines.shift());

let ano = Math.floor(idade / 365);
idade %= 365;

let mes = Math.floor(idade / 30);
idade %= 30;

let dias = idade;

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dias + " dia(s)");
