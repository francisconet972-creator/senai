// Selecionando os elementos no DOM
const tarefaInput = document.getElementById('tarefaInput');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar nova tarefa
btnAdicionar.addEventListener('click', () => {
  const textoTarefa = tarefaInput.value.trim();

  // 1. Verifica se o campo de texto está vazio
  if (textoTarefa === '') {
    alert('Por favor, digite uma tarefa!');
    return;
  }

  // 2. Cria o elemento <li> e define o texto digitado
  const novoLi = document.createElement('li');
  novoLi.textContent = textoTarefa;

  // 3. Adiciona o evento de clique na tarefa criada para removê-la
  novoLi.addEventListener('click', () => {
    alert(`Tarefa concluída: ${novoLi.textContent}`);
    novoLi.remove();
  });

  // 4. Adiciona o <li> na lista <ul>
  listaTarefas.appendChild(novoLi);

  // 5. Limpa o input e foca nele novamente
  tarefaInput.value = '';
  tarefaInput.focus();
});