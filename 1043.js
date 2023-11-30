
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//para ler linhas com um unico valor na mesma linha use o comando a seguir
  

let triangulo = lines.shift().split(" ").map(parseFloat);

let [A, B, C] = triangulo;

if (A + B > C && A + C > B && B + C > A){
    let perimetro = A + B + C;
    console.log("Perimetro = " + perimetro.toFixed(1));

} else {
    let area = ((A + B) * C) / 2;
    console.log("Area = " + area.toFixed(1));
}


















 



