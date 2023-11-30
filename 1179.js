const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

function clear(n){
    while(n.length){
        n.pop();
    }
    return n;
}

let par = []; let impar = [];
for(let i = 0; i < 15; i++){
    let n = parseInt(lines.shift());
    if(n % 2 !== 0){
        impar.push(n);
        if(impar.length === 5){
            for(let m = 0; m <  5; m++){
                console.log(`impar[${m}] = ${impar[m]}`);
            }
            clear(impar);
        }
    }
    else{
        par.push(n);
        if(par.length === 5){
            for(let m = 0; m < 5; m++){
                console.log(`par[${m}] = ${par[m]}`);
            }
            clear(par);
        }
    }
}
if(impar.length !== 0){
    for(let i = 0; i < impar.length; i++){
        console.log(`impar[${i}] = ${impar[i]}`);
    }
}
if(par.length !== 0){
    for(let i = 0; i < par.length; i++){
        console.log(`par[${i}] = ${par[i]}`);
    }
}