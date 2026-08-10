// Seleciona os elementos do DOM
const caixa = document.getElementById('minhaCaixa');
const btnAplicar = document.getElementById('btnAplicar');

// Adiciona o ouvinte de clique no botão
btnAplicar.addEventListener('click', () => {
  // Modifica os estilos do elemento simultaneamente
  caixa.style.backgroundColor = 'yellow';
  caixa.style.border = '2px solid black';
  caixa.style.padding = '20px';
});