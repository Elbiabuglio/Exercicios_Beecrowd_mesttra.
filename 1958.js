const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

var inputString = prompt();
var inputValue = parseFloat(inputString);

if (inputValue === -0) {
  console.log("-0.0000E+00");
} else {
  var formattedValue = inputValue.toExponential(4);
  
  if (inputValue >= 0) {
    formattedValue = "+" + formattedValue;
  } else {
    formattedValue = " " + formattedValue;
  }

  console.log(formattedValue);
}








   




    
	





  