let filmes = [
  { titulo: "Matrix", ano: 1999, genero: "Ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "Ficção" },
  { titulo: "Titanic", ano: 1997, genero: "Romance" },
  { titulo: "Avatar", ano: 2009, genero: "Ficção" },
  { titulo: "Coringa", ano: 2019, genero: "Drama" }
];

// 1. Títulos
let titulos = filmes.map(f => f.titulo);
console.log(titulos);

// 2. Filmes de Ficção
let ficcao = filmes.filter(f => f.genero === "Ficção");
console.log(ficcao);

// 3. Filme de 1997
let filme1997 = filmes.find(f => f.ano === 1997);
console.log(filme1997);

// 4. Títulos dos filmes após 2000
let depois2000 = filmes
  .filter(f => f.ano > 2000)
  .map(f => f.titulo);

console.log(depois2000);