const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let prompt = function(texto) { return lines.shift();};
const casos = parseInt(prompt());

for (let i = 0; i < casos; i++) {
  let mergulhador = prompt();
  let dificuldade = parseFloat(prompt());
  let pontuacoes = prompt().split(" ").map(Number);
  let resultado = 0;

  let menorPontuacao = pontuacoes[0];
  let maiorPontuacao = pontuacoes[0];
  
  for (let j = 1; j < pontuacoes.length; j++) {
    menorPontuacao = Math.min(menorPontuacao, pontuacoes[j]);
    maiorPontuacao = Math.max(maiorPontuacao, pontuacoes[j]);
  }

  pontuacoes = pontuacoes.filter(pontuacao => pontuacao !== menorPontuacao && pontuacao !== maiorPontuacao);

  resultado = pontuacoes.reduce((soma, valor) => soma + valor, 0) * dificuldade;

  console.log(mergulhador + " " + resultado.toFixed(2));
}