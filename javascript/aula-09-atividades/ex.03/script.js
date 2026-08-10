// Seleciona o botão usando document.querySelector('#btnAcao')
const botao = document.querySelector('#btnAcao');
const infoBotao = document.getElementById('infoBotao');

// Adiciona o evento de clique
botao.addEventListener('click', () => {
  // Captura o texto do botão e exibe no parágrafo
  infoBotao.textContent = botao.textContent;
});