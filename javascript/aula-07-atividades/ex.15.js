const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? "Erro: divisão por zero" : a / b;

console.log(somar(10, 5));
console.log(subtrair(10, 5));
console.log(multiplicar(10, 5));
console.log(dividir(10, 5));
console.log(dividir(10, 0));