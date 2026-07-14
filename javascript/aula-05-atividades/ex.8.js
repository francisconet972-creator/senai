let valorCompra = 250;
let desconto = 0;

if (valorCompra > 500) {
  desconto = 0.20;
} else if (valorCompra > 200) {
  desconto = 0.10;
} else if (valorCompra > 100) {
  desconto = 0.05;
}

let valorFinal = valorCompra - (valorCompra * desconto);

console.log(valorFinal);