const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let N = Number(lines.shift());
let X = 0;
let lista = [];
let numeros = [];

for (let i = 0; i < N; i++) {

    let num = Number(lines.shift());
    numeros.push(num);

    for (let j = 1; j < num; j++) {

        if (num % j === 0){
            X += j;
        }
    }
    if (X === num){
        lista.push(true);
    }
    else {
        lista.push(false);
    }
    X = 0;
}
for (let l = 0; l < N; l++){
    lista[l] === true ? console.log(`${numeros[l]} eh perfeito`): console.log(`${numeros[l]} nao eh perfeito`);
}