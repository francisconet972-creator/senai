const botao = document.querySelector("#btnListar");
const lista = document.querySelector("#listaFrases");

botao.addEventListener("click", function() {

    lista.innerHTML = "";

    const paragrafos = document.querySelectorAll("p");

    paragrafos.forEach(function(paragrafo) {

        const li = document.createElement("li");

        li.textContent = paragrafo.textContent;

        lista.appendChild(li);

    });

});