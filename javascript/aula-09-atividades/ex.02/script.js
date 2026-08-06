const botao = document.querySelector("#botao");
const destaque = document.querySelector("#destaque");

botao.addEventListener("click", function() {
    const paragrafo = document.querySelector(".importante");

    destaque.textContent = paragrafo.textContent;
});