const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let Alcool = 0;
let Gasolina = 0;
let Diesel = 0;

while(true){
    let combustivel = parseInt(lines.shift());
    if (combustivel == 4){
        break;
    }
    else if (combustivel == 1){
        Alcool += 1;
    }
    else if (combustivel == 2){
        Gasolina += 1;
    }
    else if (combustivel == 3){
        Diesel += 1;
    }
    else{
        continue;
    }
}
console.log("MUITO OBRIGADO");
console.log("Alcool: " +  Alcool);
console.log("Gasolina: " + Gasolina);
console.log("Diesel: " + Diesel);
  

 





