const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let diaInicio = parseInt(lines[0].split(' ')[1]);
let [horaInicio, minutoInicio, segundoInicio] = lines[1].split(' : ').map(Number);
let diaFim = parseInt(lines[2].split(' ')[1]);
let [horaFim, minutoFim, segundoFim] = lines[3].split(' : ').map(Number);

let segundosInicio = diaInicio * 86400 + horaInicio * 3600 + minutoInicio * 60 + segundoInicio;
let segundosFim = diaFim * 86400 + horaFim * 3600 + minutoFim * 60 + segundoFim;

let diferencaSegundos = segundosFim - segundosInicio;

if (diferencaSegundos < 0) {
  diferencaSegundos += 86400; 
}

let dias = Math.floor(diferencaSegundos / 86400);
diferencaSegundos %= 86400;
let horas = Math.floor(diferencaSegundos / 3600);
diferencaSegundos %= 3600;
let minutos = Math.floor(diferencaSegundos / 60);
let segundos = diferencaSegundos % 60;

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
