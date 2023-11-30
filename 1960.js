const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let numero = parseInt(lines.shift());

const arabicos = [900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanos = ['CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

let i = 0;
let resultado = '';

while (numero > 0) {
  if (numero >= arabicos[i]) {
    numero -= arabicos[i];
    resultado += romanos[i];
  } else {
    i++;
  }
}

console.log(resultado);

 




   








   




    
	





  