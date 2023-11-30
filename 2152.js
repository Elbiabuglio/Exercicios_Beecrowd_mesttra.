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
let H, M, O;
let log;

for (let i = 0; i < N; i++) {
    log = "";
    let entrada = lines.shift().split(" ");
    H = parseInt(entrada[0]);
    M = parseInt(entrada[1]);
    O = parseInt(entrada[2]);
    
    if (!isNaN(H) && !isNaN(M)) {
        log += H.toString().padStart(2, '0');
        log += ":";
        log += M.toString().padStart(2, '0');

        if (O === 1) {
            log += " - A porta abriu!";
        } else {
            log += " - A porta fechou!";
        }

        console.log(log);
    } else {
        console.log("Entrada inválida para horas ou minutos.");
    }
}

