const inputTarefa = window.document.getElementsByClassName('input-tarefa')[0];
const btnTarefa = window.document.getElementsByClassName('btn-tarefa')[0];
const tarefas = window.document.getElementsByClassName('tarefas')[0];

btnTarefa.addEventListener('click', () => {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

function criaLi() {
    const li = window.document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = window.document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

window.document.addEventListener('click', (e) => {
    const elementoClicado = e.target;

    if(elementoClicado.classList.contains('apagar')) {
        elementoClicado.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

adicionaTarefasSalvas();
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
