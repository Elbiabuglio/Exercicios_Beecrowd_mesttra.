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

for (let i = 0; i < N; i++) {

    let [A, B, PA, PB] = lines.shift().split(" ");

    A = parseInt(A); B = parseInt(B); PA = parseFloat(PA); PB = parseFloat(PB);
    
    let anos = 0;
    while(true){
        A += parseInt(A*PA / 100.0);
        B += parseInt(B*PB / 100.0);
        anos += 1;

        if (anos > 100){
            console.log('Mais de 1 seculo.');
            break;
        }
        if (A > B){
            console.log(`${anos} anos.`);
            break;
        }
    }
}