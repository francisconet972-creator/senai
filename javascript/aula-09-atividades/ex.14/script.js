// Selecionando os elementos do DOM
const caixa = document.getElementById('caixa');
const btnAtivar = document.getElementById('btnAtivar');
const btnDesativar = document.getElementById('btnDesativar');
const btnVerificar = document.getElementById('btnVerificar');

// Adiciona a classe 'ativo'
btnAtivar.addEventListener('click', () => {
  caixa.classList.add('ativo');
});

// Remove a classe 'ativo'
btnDesativar.addEventListener('click', () => {
  caixa.classList.remove('ativo');
});

// Verifica se a classe 'ativo' está presente e exibe o booleano
btnVerificar.addEventListener('click', () => {
  const estaAtivo = caixa.classList.contains('ativo');
  alert(`A classe 'ativo' está presente? ${estaAtivo}`);
});