let titulo = document.querySelector("h1")
let btnativar = document.querySelector(".btnativar")
let btndesativar = document.querySelector(".btndesativar")

btnativar.addEventListener("click" , function(){
    titulo.classList.add("is-active")
})

btndesativar.addEventListener("click" , function(){
    titulo.classList.remove("is-active")
})
