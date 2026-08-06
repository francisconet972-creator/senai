const botao = document.querySelector("#alterar");
const titulo = document.querySelector("#titulo");

botao.addEventListener("click", function() {
    titulo.textContent = "Título Modificado com Sucesso!";
});