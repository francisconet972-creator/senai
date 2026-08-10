// Seleciona os elementos no DOM
const paragrafo = document.getElementById('removivel');
const btnRemover = document.getElementById('btnRemover');

// Adiciona o ouvinte de clique ao botão
btnRemover.addEventListener('click', () => {
  // Verifica se o parágrafo ainda existe na página
  if (paragrafo) {
    // Captura o texto do parágrafo
    const texto = paragrafo.textContent;

    // Exibe o alerta com o texto do parágrafo
    alert(`Removendo o parágrafo: ${texto}`);

    // Remove o parágrafo do DOM
    paragrafo.remove();
  }
});