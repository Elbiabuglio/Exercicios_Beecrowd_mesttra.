const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir




let N = parseInt(lines.shift());

let T, anos;

for (let i = 0; i < N; i++) {
    T = parseInt(lines.shift());

    if (T >= 2015) {
        anos = T - 2014;
        console.log(anos + " A.C.");
    } else {
        anos = 2015 - T;
        console.log(anos + " D.C.");
    }
}




   








   




    
	





  