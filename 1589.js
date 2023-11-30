const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

// Define uma função chamada 'prompt' que retorna o próximo elemento do array 'lines'

for (let i = 1; i < lines.length; i += 2) {
    const A = parseInt(lines[i - 1]);
    const lesmas = lines[i].split(" ");
    let cont = 0;
  
    for (let j = 0; j < A; j++) {
      const velocidade = parseInt(lesmas[j]);
  
      if (velocidade < 10) {
        cont = Math.max(cont, 1);
      } else if (velocidade < 20) {
        cont = Math.max(cont, 2);
      } else {
        cont = Math.max(cont, 3);
      }
    }
  
    console.log(cont);
  }
  
  