const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let [A, B, C] = lines.shift().split(" ");

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

let delta = Math.pow(B, 2) - 4 * A * C;
let R1, R2;

if (delta < 0 || A === 0) {
   console.log("Impossivel calcular");
} else {
   R1 = (-B + Math.sqrt(delta)) / (2 * A);
   R2 = (-B - Math.sqrt(delta)) / (2 * A);
   
   console.log("R1 = " + R1.toFixed(5));
   console.log("R2 = " + R2.toFixed(5));
}







   

   




