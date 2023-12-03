const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let n = parseInt(lines.shift());

if (n == 0) {
		console.log("E");

} else if (n >= 1 && n <= 35) {
		console.log("D");

} else if (n >= 36 && n <= 60) {
		console.log("C");

} else if (n >= 61 && n <= 85) {
		console.log("B");
    
} else {
		console.log("A");
}
