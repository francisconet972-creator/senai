let contador = 0;

const numero = document.getElementById("contador");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");

mais.addEventListener("click", () => {
  contador++;
  numero.textContent = contador;
});

menos.addEventListener("click", () => {
  contador--;
  numero.textContent = contador;
});