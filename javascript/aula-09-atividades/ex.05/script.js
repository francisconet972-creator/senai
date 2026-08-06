const botao = document.querySelector("#analisar");
const divAnalise = document.querySelector("#analise");

botao.addEventListener("click", function() {

    const titulo = document.querySelector("h2");

    divAnalise.innerHTML = `
        Texto: ${titulo.textContent} <br>
        HTML interno: ${titulo.innerHTML} <br>
        Cor: ${titulo.style.color}
    `;

});