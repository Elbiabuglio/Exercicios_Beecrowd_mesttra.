const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

const values = input.split("\n");
const operacoes = (loop) => {
  const respostas = [];
  for (let i = 0; i < loop; i++) {
    const questoes = values.shift();
    const formatacoes = questoes.replace("=", " ").split(" ");
    const listaq = formatacoes.map((q) =>
      parseInt(q)
    );

    if (listaq[0] + listaq[1] === listaq[2]) {
      respostas.push("+");
    } else if (listaq[0] - listaq[1] === listaq[2]) {
      respostas.push("-");
    } else if (listaq[0] * listaq[1] === listaq[2]) {
      respostas.push("*");
    } else {
      respostas.push("I");
    }
  }
  return respostas;
};

const jogadores = (loop, listAnwser) => {
  const errou = [];
  for (let i = 0; i < loop; i++) {
    const [name, question, answer] = values.shift().split(" ");

    if (answer !== listAnwser[question - 1]) {
      errou.push(name);
    }
  }

  if (errou.length === 0) {
    return "You Shall All Pass!";
  }

  if (errou.length === loop) {
    return `None Shall Pass!`;
  }

  errou.sort();
  return errou.join(" ");
};

while (values.length > 0) {
  const loop = parseInt(values.shift());

  if (isNaN(loop)) {
    break;
  }

  const listQuestionsAnwser = operacoes(loop);
  console.log(jogadores(loop, listQuestionsAnwser));
}



