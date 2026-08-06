let input = document.getElementById("tarefa");
let botao = document.getElementById("adicionar");
let lista = document.getElementById("lista");

botao.addEventListener("click", function () {
    if (input.value === "") return;

    let item = document.createElement("li");
    item.textContent = input.value;

    item.addEventListener("click", function () {
        item.remove();
    });

    lista.appendChild(item);
    input.value = "";
});