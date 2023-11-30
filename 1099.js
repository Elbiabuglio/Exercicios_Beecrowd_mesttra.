const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
  let input = lines[i].split(" ");
  let X = parseInt(input[0]);
  let Y = parseInt(input[1]);
  let soma = 0;

  if (Y > X) {
    for (let j = X + 1; j < Y; j++) {
      if (j % 2 !== 0) soma += j;
    }
  } else {
    for (let j = Y + 1; j < X; j++) {
      if (j % 2 !== 0) soma += j;
    }
  }

  console.log(soma);
}

       


  






