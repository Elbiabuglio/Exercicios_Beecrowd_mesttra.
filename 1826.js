const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let index = 0;

function getNextLine() {
  if (index < lines.length) {
    return lines[index++];
  } else {
    throw new Error("Fim das linhas alcançado.");
  }
}

function processarGramatica() {
  const [numeroVariaveis, numeroRegras] = getNextLine().split(' ').map(Number);
  const variaveis = new Set();
  const regras = new Map();

  for (let i = 0; i < numeroVariaveis; i++) {
    const variavel = getNextLine().trim();
    variaveis.add(variavel);
    regras.set(variavel, []);
  }

  for (let i = 0; i < numeroRegras; i++) {
    const [lhs, ...rhs] = getNextLine().split(' ');
    const regra = rhs.map((simbolo) => simbolo.trim());
    regras.get(lhs).push(regra);
  }

  const visitado = new Map();

  function podeGerarCadeiaVazia(variavel) {
    if (visitado.has(variavel)) {
      return visitado.get(variavel);
    }

    const regrasVariavel = regras.get(variavel);

    for (const regra of regrasVariavel) {
      let podeGerar = true;
      for (const simbolo of regra) {
        if (variaveis.has(simbolo)) {
          podeGerar = podeGerar && podeGerarCadeiaVazia(simbolo);
        } else {
          podeGerar = false;
        }
      }

      if (podeGerar) {
        visitado.set(variavel, true);
        return true;
      }
    }

    visitado.set(variavel, false);
    return false;
  }

  if (podeGerarCadeiaVazia(Array.from(variaveis)[0])) {
    console.log("vazia"); // Alterado para "vazia" se a cadeia for vazia
  } else {
    console.log("finita"); // Alterado para "finita" se a cadeia não for vazia
  }
}

while (index < lines.length) {
  processarGramatica();
}