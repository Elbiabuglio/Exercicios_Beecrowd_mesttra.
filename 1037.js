const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir


//para ler linhas com um unico valor na mesma linha use o comando a seguir
let valor = parseFloat(lines.shift());   


if(valor >= 0 && valor <= 25){
    console.log("Intervalo [0,25]"); 

}else if (valor > 25 && valor <= 50){
    console.log("Intervalo (25,50]"); 

}else if (valor > 50 && valor <= 75){
    console.log("Intervalo (50,75]"); 

}else if (valor > 75 && valor <= 100){
    console.log("Intervalo (75,100]"); 
}else {
    console.log("Fora de intervalo");
}

