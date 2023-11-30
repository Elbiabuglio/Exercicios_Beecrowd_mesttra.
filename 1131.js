const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let totalJogos = 0;
let inter = 0;
let gremio = 0;
let empates = 0;

let i = 0; 

while (true) {
  const [golsInter, golsGremio] = lines[i].split(' ').map(Number);

  totalJogos++;

  if (golsInter > golsGremio) {
    inter++;

  } else if (golsInter < golsGremio) {
    gremio++;
    
  } else {
    empates++;
  }

  console.log("Novo grenal (1-sim 2-nao)");
  const numGols = parseInt(lines[i + 1]);

  if (numGols == 2) {
    break;
  }

  i += 2; 
}

console.log(totalJogos + " grenais");
console.log("Inter: " + inter);
console.log("Gremio: " + gremio);
console.log("Empates: " + empates);

if (inter > gremio) {
  console.log("Inter venceu mais");
} else if (inter < gremio) {
  console.log("Gremio venceu mais");
} else {
  console.log("Nao houve vencedor");
}