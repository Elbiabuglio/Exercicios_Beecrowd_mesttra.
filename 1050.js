const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let DDD = parseInt(lines.shift()); 

if(DDD === 61){
    console.log("Brasilia"); 

}else if (DDD === 71){
    console.log("Salvador"); 

}else if (DDD === 11){
    console.log("Sao Paulo"); 

}else if (DDD === 21){
    console.log("Rio de Janeiro"); 

}else if (DDD === 32){
    console.log("Juiz de Fora");

}else if (DDD === 19){
    console.log("Campinas");

}else if (DDD === 27){
    console.log("Vitoria");

}else if (DDD === 31){
    console.log("Belo horizonte");

}else {
    console.log("DDD nao cadastrado");
}
