// Variável que guarda o valor atual do contador
let contador = 0;

// Seleção dos elementos no DOM
const elementoContador = document.getElementById('contador');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');

// Função para incrementar o valor
btnIncrementar.addEventListener('click', () => {
  contador++;
  elementoContador.textContent = contador;
});

// Função para decrementar o valor (permite negativos)
btnDecrementar.addEventListener('click', () => {
  contador--;
  elementoContador.textContent = contador;
});