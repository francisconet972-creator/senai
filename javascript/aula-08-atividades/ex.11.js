let usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Pedro" }
];

let usuario = usuarios.find(u => u.id === 2);

console.log(usuario);