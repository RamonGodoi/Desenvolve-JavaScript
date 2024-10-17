let tarefas = [];

const tarefaInput = document.getElementById('tarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

adicionarBtn.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    const descricao = tarefaInput.value.trim();
    
    // Verifica se a descrição já existe
    if (descricao && !tarefas.some(tarefa => tarefa.descricao === descricao)) {
        const novaTarefa = { descricao, status: false };
        tarefas.push(novaTarefa);
        tarefaInput.value = '';
        renderizarTarefas();
    } else if (tarefas.some(tarefa => tarefa.descricao === descricao)) {
        alert('Tarefa já existe!');
    }
}

function renderizarTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.className = tarefa.status ? 'concluida' : '';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => alterarStatus(index));

        const textoTarefa = document.createTextNode(tarefa.descricao);

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.addEventListener('click', () => removerTarefa(index));

        li.appendChild(checkbox);
        li.appendChild(textoTarefa);
        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    });
}

function alterarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    renderizarTarefas();
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}