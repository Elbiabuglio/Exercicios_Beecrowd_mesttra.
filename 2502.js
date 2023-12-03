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
while (true) {
  let inp = prompt("input").split("");
  if (isNaN(inp[0])) {
    break;
  }

  let [size, cases] = inp.join("").split(" ");
  let C1 = prompt("C1").split("");
  let C2 = prompt("C2").split("");
  let table = new Map();

  for (let i = 0; i < size; i++) {
    table.set(C1[i], C2[i]);
    table.set(C1[i].toLowerCase(), C2[i].toLowerCase());
    table.set(C2[i], C1[i]);
    table.set(C2[i].toLowerCase(), C1[i].toLowerCase());
  }

  for (let i = 0; i < cases; i++) {
    let cipher = prompt("cipher").split("");

    for (let i = 0; i < cipher.length; i++) {
      if (table.has(cipher[i])) {
        cipher[i] = table.get(cipher[i]);
      }
    }
    console.log(cipher.join(""));
  }
  console.log("");
}