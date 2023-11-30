const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let palavra1 = lines.shift();
let palavra2 = lines.shift();
let palavra3 = lines.shift();

if (palavra1 === "vertebrado") {
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            console.log("aguia");
        } else if (palavra3 === "onivoro") {
            console.log("pomba");
        }
    } else if (palavra2 === "mamifero") {
        if (palavra3 === "onivoro") {
            console.log("homem");
        } else if (palavra3 === "herbivoro") {
            console.log("vaca");
        }
    }
} else if (palavra1 === "invertebrado") {
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            console.log("pulga");
        } else if (palavra3 === "herbivoro") {
            console.log("lagarta");
        }
    } else if (palavra2 === "anelideo") {
        if (palavra3 === "hematofago") {
            console.log("sanguessuga");
        } else if (palavra3 === "onivoro") {
            console.log("minhoca");
        }
    }
}
