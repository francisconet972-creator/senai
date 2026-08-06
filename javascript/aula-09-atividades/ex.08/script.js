const texto = document.querySelector("#texto");

document.querySelector("#vermelho").addEventListener("click", function() {
    texto.style.color = "red";
});

document.querySelector("#azul").addEventListener("click", function() {
    texto.style.color = "blue";
});

document.querySelector("#verde").addEventListener("click", function() {
    texto.style.color = "green";
});