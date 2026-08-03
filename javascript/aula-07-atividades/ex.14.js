let mensagem = "Global";

function testarEscopo() {
  let mensagem = "Local";
  console.log(mensagem);
}

testarEscopo();
console.log(mensagem);