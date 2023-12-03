const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

function calcularConteudoNutricional(quantidade, fruta) {
  const fatoresNutricionais = {
    suco: 120,
    morango: 85,
    mamao: 85,
    goiaba: 70,
    manga: 56,
    laranja: 50,
    brocolis: 34
  };

  return quantidade * fatoresNutricionais[fruta];
}

let numero = parseInt(lines.shift());

while (numero !== 0) {
  let soma = 0;

  for (let i = 0; i < numero; i++) {
    let [quantidade, fruta] = lines.shift().trim().split(" ");
    soma += calcularConteudoNutricional(parseInt(quantidade), fruta);
  }

  if (soma >= 110 && soma <= 130) {
    console.log(`${soma} mg`);
  } else if (soma > 130) {
    console.log(`Menos ${Math.abs(130 - soma)} mg`);
  } else if (soma < 110) {
    console.log(`Mais ${110 - soma} mg`);
  }

  numero = parseInt(lines.shift());
}
