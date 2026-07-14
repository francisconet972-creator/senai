let num1 = 15, num2 = 5, operador = "/";

switch (operador) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num2 !== 0 ? num1 / num2 : "Divisão por zero não permitida");
    break;
  default:
    console.log("Operador inválido");
}
