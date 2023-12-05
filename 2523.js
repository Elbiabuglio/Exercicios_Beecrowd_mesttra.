const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let palavra = "";
let alfabeto = lines.shift();
let numero = lines.shift();
let letras = lines.shift().split(" ");

while(lines.length != 0){
  for(let i = 0; i <  parseInt(numero); i++){
    palavra += alfabeto[(parseInt(letras[i]) - 1)];
  }

  console.log(palavra);
  if(lines.length == 1){
    break;
  }
  
  palavra = "";
  alfabeto = lines.shift();
  numero = lines.shift();
  letras = lines.shift().split(" ");
}
