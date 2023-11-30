let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.

if (valorSaque <= saldoTotal && valorSaque > 0){
    saldoTotal -=valorSaque;
  console.log("Saque realizado com sucesso! Novo saldo: {saldo}")
}else{
  console.log( "Saldo insuficiente. Saque nao realizado!")
}