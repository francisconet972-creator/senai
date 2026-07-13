const amigos = [
  { nome: "arthur", idade: 16 },
  { nome: "nicolas", idade: 15 },
  { nome: "carlos", idade: 22 },
  { nome: "thiaguin", idade: 12 }
];


amigos.forEach(amigo => {
  console.log(`Nome: ${amigo.nome}, Idade: ${amigo.idade}`);
});
