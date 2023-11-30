
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//para ler linhas com um unico valor na mesma linha use o comando a seguir
  

let [horaIni, minIni, horaFim, minFim] = lines.shift().split(" ").map(Number);

let duracaoHora, duracaoMinuto;

if (horaIni < horaFim || (horaIni === horaFim && minIni < minFim)) {
    duracaoHora = horaFim - horaIni;
    duracaoMinuto = minFim - minIni;

    if (duracaoMinuto < 0) {
        duracaoHora--;
        duracaoMinuto += 60;
    }
} else {
    duracaoHora = 24 - (horaIni - horaFim);
    duracaoMinuto = minFim - minIni;

    if (duracaoMinuto < 0) {
        duracaoHora--;
        duracaoMinuto += 60;
    }
}
console.log("O JOGO DUROU " + duracaoHora + " HORA(S) E " + duracaoMinuto + " MINUTO(S)");


 



