// Seleciona os elementos do DOM
const botao = document.getElementById('meuBotao');
const paragrafo = document.getElementById('meuParagrafo');

// Escuta o clique no botão
botao.addEventListener('click', () => {
  // Alterna a classe 'oculto' no parágrafo
  paragrafo.classList.toggle('oculto');
});