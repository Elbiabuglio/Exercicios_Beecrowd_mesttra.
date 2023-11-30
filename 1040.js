
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//para ler linhas com um unico valor na mesma linha use o comando a seguir
  

let [N1, N2, N3, N4] = lines.shift().split(" ").map(parseFloat);
let media = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
    console.log("Aluno aprovado.");
} else if (media >= 5.0 && media < 7.0) {
    console.log("Aluno em exame.");

    let exame = parseFloat(lines.shift());
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    
    media = (media + exame) / 2;

    if (media >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }

    console.log(`Media final: ${media.toFixed(1)}`);
} else {
    console.log("Aluno reprovado.");
}





















 



