let obterEntrada = function(texto) { return lines.shift();};

while (true) {
  let patos = obterEntrada();
  if (patos < 0) {
    break;
  }

  if (0 < patos && patos < 10000000000) {
    patos = (parseInt(patos) - 1).toString();
  } else if (0 < patos) {
    let metade1 = patos.slice(-10);
    let metade2 = patos.slice(0, -10);

    if (metade1 > 0) {
      metade1 = (parseInt("1" + metade1) - 1).toString();
      metade1 = metade1.slice(-10);
    } else {
      metade1 = "9999999999";
      metade2 = (parseInt(metade2) - 1).toString();
    }

    patos = metade2 + metade1;
  }

  console.log(patos);
}