const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let [A, B, C, D] = lines.shift().split(" "); 

A = parseInt(A);
B = parseInt(B);
C = parseInt(C);
D = parseInt(D);


if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
   console.log( "Valores aceitos" );

}else {
   console.log( "Valores nao aceitos" );
}

   

   




