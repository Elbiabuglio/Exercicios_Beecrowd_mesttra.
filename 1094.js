const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let N = parseInt(lines[0]);
let [C, R, S] = lines.shift().split(" ");
let Rato = 0;
let Coelho = 0;
let Sapo = 0;

for (let i = 0; i < N; i++) {
    let [total, animal] = lines[i].split(" ");
    total = parseInt(total);

    if (animal === "C") {
        Coelho += total;
    } else if (animal === "R") {
        Rato += total;
    } else if (animal === "S") {
        Sapo += total;
    }
}

N = Coelho + Rato + Sapo;

console.log("Total: " + N + " cobaias");
console.log("Total de coelhos: " + Coelho);
console.log("Total de ratos: " + Rato);
console.log("Total de sapos: " + Sapo);
console.log("Percentual de coelhos: " + ((Coelho * 100) / N).toFixed(2) + " %");
console.log("Percentual de ratos: " + ((Rato * 100) / N).toFixed(2) + " %");
console.log("Percentual de sapos: " + ((Sapo * 100) / N).toFixed(2) + " %");












  






