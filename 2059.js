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
let inicial = prompt("Digite os Valores").split(" ").map(Number)
let soma,imparpar
const p = inicial[0];
const j1 = inicial[1];
const j2 = inicial[2];
const r = inicial[3];
const a = inicial[4];
soma = j1 + j2
if (soma %2 == 0){
		parimpar = 0; // par
	}else{
		parimpar = 1; // impar
	}
// Ganhador 1
if (p == 1 && parimpar == 0 && r ==0 && a==0){// p == 1 par jogador 1
		console.log("Jogador 1 ganha!");
	}else if (p == 0 && parimpar == 1 && r ==0 && a ==0 ){ // p ==0 impar jogador 1
		console.log("Jogador 1 ganha!");
	}else if (r ==1 && a ==0){// Jogador 1 roubou
		console.log("Jogador 1 ganha!");
	}else if (r == 1 && a == 1){//Acusou o roubo
		console.log("Jogador 2 ganha!");
	}else if (p==1 && parimpar == 1 && r ==0 && a==0){
		console.log("Jogador 2 ganha!");
	}else if (p==0 && parimpar ==0 && r ==0 && a==0){
	    console.log("Jogador 2 ganha!");
	}else if (r ==0 && a ==1){
		console.log("Jogador 1 ganha!");
	}
	

  
