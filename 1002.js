
const prompt = require('prompt-sync')()


let  valor = Number(prompt("Digite o valor: "))

if(valor < 0) {
    console.log("Valor negativo");

}else if (valor > 0){
    if (valor < 50){
        console.log("Valor positivo menor que 50"); 
    }else {
        console.log("Valor positivo");
    }
}else {
    console.log("Valor neutro");  

}

