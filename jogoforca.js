const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const prompt = require("prompt-sync")()

//codigo para ler a palavra secreta do arquivo

let palavraSecreta = "abacate"

let tentativasRestantes = palavraSecreta.length
let letrasTentadas = ""

for (  ; tentativasRestantes > 0; tentativasRestantes--) {
    let conteudoTentado

    console.clear()
    console.log("Tentativas restantes: " + tentativasRestantes)
    console.log()
    console.log("Palavra secreta: " + construirPalavraMascarada(palavraSecreta) )
    console.log()

    letrasTentadas += obterTentativa()
} 

function construirPalavraMascarada(palavraSecreta){
    

    let palavraMascarada = "    "

    for (let posicao = 0; posicao < palavraSecreta.length; posicao++) {
         let letraAtual = palavraSecreta[posicao]
    
            if (letrasTentadas.includes(letraAtual)) {
                palavraMascarada += letraAtual;
            } else {
                palavraMascarada += "__";
            }
        }
    return palavraMascarada
}

function obterTentativa(){
    let opcao

    console.log(`Escolha a opção abaixo:
    1 - Digitar uma letra
    2 - Chutar a palavra
    `)
    
    do {
        opcao = Number(prompt("Digite a opção: "))

        if (opcao != 1 && opcao != 2) { //avaliar a possibilidade de nao repetir esta expressao duas vezes
            console.log("Opção digitada inválida!")
        }

    } while ( opcao != 1 && opcao != 2 )

    let resposta

    //executar a obtencao da informacao do usuario de acordo com o codigo escolhido
    switch (opcao) {
        case 1:
            resposta = prompt("Digite a letra desejada: ")

            while (resposta.length !== 1 || !/[a-zA-Z]/.test(resposta)) {
                console.log("Por favor, digite uma única letra válida.")
                resposta = prompt("Digite a letra desejada: ")
            }

            return resposta


          
        case 2:
            resposta = prompt("Digite a palavra desejada: ")
            return resposta
    }
}