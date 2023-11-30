const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir

 let operation = lines.shift();
 let positions = [];
 let value = 0;
 let m = 1;
 for(let i = 1; i<11; i++){
    value = i * 12;
    if(i<=5){
      for(let j = 0; j<11; j++){
        console.log(value.toFixed(1));
      }
       }

      }


      

      }

      }