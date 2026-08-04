let produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 800 }
];

let resultado = produtos.filter(produto => produto.preco > 60);

console.log(resultado);