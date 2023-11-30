const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

function main() {
 

  for (let i = 0; i < lines.length; i++) {
    const [N, M] = lines[i].split(' ').map(Number);

    if (N <= 0 || M <= 0) {
      break; 
    }

    let soma = 0;
    let sequencia = '';

    if (M > N) {
      for (let cont = N; cont <= M; cont++) {
        soma += cont;
        sequencia += cont + ' ';
      }
    } else if (M < N) {
      for (let cont = M; cont <= N; cont++) {
        soma += cont;
        sequencia += cont + ' ';
      }
    } else {
      soma = N; 
      sequencia = N + ' ';
    }

    console.log(sequencia.trim() + ' Sum=' + soma);
  }
}

main();
