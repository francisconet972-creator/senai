const botao = document.querySelector("#inserir");
const conteudo = document.querySelector("#conteudo");

botao.addEventListener("click", function() {
    conteudo.innerHTML = "<strong>Negrito</strong> e <em>Itálico</em>";
});