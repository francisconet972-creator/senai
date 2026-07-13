
let compras = [];

compras.push("arroz");
compras.push("feijão");
compras.push("leite");
compras.push("pão");
compras.push("açúcar");


console.log("Lista de compras:");

compras.forEach((item, indice) => {
  console.log(`${indice + 1} - ${item}`);
});

if (compras.includes("arroz")) {
  console.log("Arroz está na lista!");
} else {
  console.log("Arroz não está na lista.");
}


let itemRemovido = compras.pop();

console.log("Item removido:", itemRemovido);


console.log("Lista atualizada:");

compras.forEach((item, indice) => {
  console.log(`${indice + 1} - ${item}`);
});

console.log("Total de itens:", compras.length);