const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let caso = 1;
let cont = 0;
let pos = 0;
let flag = 0;
let N1, N2;

while (caso <= 3) {
    cont = 0;
    N1 = lines.shift();  // Não precisa converter para número
    N2 = lines.shift();  // Não precisa converter para número
    console.log("Caso #" + caso + ":");

    for (let i = 0; i < N2.length; i++) {
        if (N1.charAt(0) == N2.charAt(i)) {
            flag = 0;
            for (let j = 0; j < N1.length; j++) {
                if (i + j >= N2.length) break;
                if (N1.charAt(j) == N2.charAt(i + j)) flag++;
            }
            if (flag == N1.length) {
                cont++;
                pos = i + 1;
            }
        }
    }

    if (cont == 0) {
        console.log("Nao existe subsequencia");
    } else {
        console.log("Qtd.Subsequencias: " + cont);
        console.log("Pos: " + pos);
    }

    console.log("");
    caso++;
}
