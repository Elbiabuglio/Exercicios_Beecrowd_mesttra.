const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let QT = parseInt(lines.shift());

for (let i = 0; i < QT; i++) {
    
    let linha1 = lines.shift().split(' ');
    let linha2 = lines.shift().split(' ');
    let N = parseInt(linha2[0]);
    let M = parseInt(linha2[1]);
    let nome1 = linha1[0];
    let escolha1 = linha1[1].toLowerCase();
    let nome2 = linha1[2];
    let escolha2 = linha1[3].toLowerCase();

    if (((N + M) % 2 === 0 && escolha1 === "par") ||
        ((N + M) % 2 !== 0 && escolha1 === "impar")) {
        console.log(nome1);
    } else {
        console.log(nome2);
    }
}


    
	





  