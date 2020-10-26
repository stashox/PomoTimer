const inputTarefa = document.getElementById('input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
const btnRemover = document.querySelector('.remover-tudo');
function criaLi(){
    const li = document.createElement('li');
    return li;
};
inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13 && inputTarefa.value != false) {
        criaTarefa(inputTarefa.value);
    }
});
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
};
function criaBotaoApagar(li){
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'X';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
};
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    tarefas.setAttribute('class', 'lista');
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
};
btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});
document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }
});
function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('X', '').trim(); //Serve pra removar o termo apagar do console, trim remove os espaços após os arrays
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); //Esses dois comandos servem para salvar a lista no localStorage do navegador. Só salva strings, por isso teve que converter
    localStorage.setItem('tarefas', tarefasJSON);
};

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log (tarefas);
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
};
adicionaTarefasSalvas();