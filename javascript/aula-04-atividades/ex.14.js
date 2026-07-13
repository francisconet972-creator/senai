const amigos = [
  { nome: "arthur", idade: 16 },
  { nome: "carlos", idade: 22 },
  { nome: "thiaguin", idade: 12 },
  { nome: "nicolas", idade: 15 }
];


const maiores = [];


amigos.forEach(amigo => {
  if (amigo.idade >= 18) {
    maiores.push(amigo);
  }
});


console.log(maiores);
