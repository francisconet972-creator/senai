const titulo = document.querySelector(".titulo")
const btnadicionar = document.querySelector(".btnadicionar")
const lista = document.querySelector(".lista")

btnadicionar.addEventListener("click", function(){
    const li = document.createElement("li")
    li.textContent = "o farmador de aura adicionou mais um item"
    lista.appendChild(li)
})