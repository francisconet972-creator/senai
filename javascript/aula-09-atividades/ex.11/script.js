// Seleciona os elementos do HTML
const btnAdicionar = document.getElementById('btnAdicionar');
const minhaLista = document.getElementById('minhaLista');

// Adiciona o ouvinte de clique ao botão
btnAdicionar.addEventListener('click', () => {
  // Conta quantos itens já existem na lista
  const quantidadeAtual = minhaLista.children.length;

  // Cria um novo elemento <li>
  const novoItem = document.createElement('li');

  // Define o texto com o número do próximo item
  novoItem.textContent = `Item ${quantidadeAtual + 1}`;

  // Adiciona o novo item dentro da <ul>
  minhaLista.appendChild(novoItem);
});