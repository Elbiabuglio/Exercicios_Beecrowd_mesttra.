const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let mes, dia, faltando;
let data;

while (lines.length > 0) {
    data = lines.shift().split(' ');
    mes = parseInt(data[0]);
    dia = parseInt(data[1]);
    faltando = ((12 - mes) * 30) + (30 - dia);

    if (mes == 2) faltando -= 1;
    if (mes == 4) faltando -= 1;
    if (mes == 5) faltando -= 1;
    if (mes == 8) faltando += 1;
    if (mes == 11) faltando -= 1;
    if (mes > 5) faltando -= 2;
    if (mes > 7) faltando -= 2;
    if (mes > 11) faltando -= 1;

    if (faltando == 1) console.log("E vespera de natal!");
    else if (faltando == 0) console.log("E natal!");
    else if (faltando < 0) console.log("Ja passou!");
    else console.log("Faltam " + faltando + " dias para o natal!");
}
