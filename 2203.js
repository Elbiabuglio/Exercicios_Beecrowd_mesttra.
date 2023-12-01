const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let Xf, Yf, Xi, Yi, Vi, R1, R2;
let D1, D2;

for (let i = 0; i < lines.length; i++) {
    let values = lines[i].split(" ");
    if (values.length === 7) {
        [Xf, Yf, Xi, Yi, Vi, R1, R2] = values.map(parseFloat);

        D1 = Math.sqrt(Math.pow(Xi - Xf, 2.0) + Math.pow(Yi - Yf, 2.0)) + (Vi * 1.50);
        D2 = R1 + R2;

        if (D1 > D2) {
            console.log("N");
        } else {
            console.log("Y");
        }
    }
}