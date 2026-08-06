const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", function() {
    const titulo = document.querySelector("h1");

    resultado.textContent = titulo.textContent;
});