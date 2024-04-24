let listagemDasTarefas = document.getElementById("lista-tarefas")
let botaoCriarTarefa = document.querySelector("#criar-tarefa")
let categoriasDasTarefas = document.getElementById("select-tarefas")

let listaDeTarefas = [["Fazer tarefa da sprint", "Trabalho"], ["Estudar módulo 1 da cadeira de aplicativos Android", "Estudos"], ["Aspirar a casa", "Casa"]];

//Mostrar as tarefas que já existem
function renderizaListaDeTarefas () {
    listagemDasTarefas.innerHTML = '';
    listaDeTarefas.forEach(tarefa => criarTarefa(tarefa))
    estilizaTarefa();
    adicionarFuncaoDeletar();
}

window.addEventListener('load', renderizaListaDeTarefas);

//Cria uma tarefa
function criarTarefa(tarefa) {
    let containerTarefa = document.createElement('li');
    let tituloTarefa = document.createElement('p');
    let categoriaTarefa = document.createElement('span');
    let botaoDeletaTarefa = document.createElement('span');

    containerTarefa.appendChild(tituloTarefa)
    containerTarefa.appendChild(categoriaTarefa);
    containerTarefa.appendChild(botaoDeletaTarefa);
    
    tituloTarefa.textContent = tarefa[0];
    categoriaTarefa.textContent = tarefa[1].toUpperCase();
    botaoDeletaTarefa.textContent = "X";

    listagemDasTarefas.appendChild(containerTarefa);

    containerTarefa.className = "tarefas__listagem__item conteudo__texto";
    categoriaTarefa.className = `tarefas__listagem__item--${tarefa[1].toLowerCase()}`;
    botaoDeletaTarefa.className = "listagem__item__botao";
}

botaoCriarTarefa.addEventListener('click', evento => criarNovaTarefa(evento))

//Cria nova tarefa
function criarNovaTarefa(evento) {
    if (evento.target.form[0].value !== "") {
        evento.preventDefault();

        let novaTarefa = [evento.target.form[0].value, evento.target.form[1].value]
        listaDeTarefas.push(novaTarefa);
        
        criarTarefa(novaTarefa);
        estilizaTarefa();
        adicionarFuncaoDeletar();
    } else {
        alert("Dê um título à tarefa para adicioná-la!")
    }
}

//Adicionar a funcionalidade de deletar nas tarefas
function adicionarFuncaoDeletar() {
    let botoesDeDeletar = Array.from(document.querySelectorAll(".listagem__item__botao"));
    botoesDeDeletar.forEach(botao => botao.addEventListener('click', evento => deletarTarefa(evento)));
}

//Deleta tarefas
function deletarTarefa(evento) {
    listaDeTarefas.forEach((tarefa) => {
        let tarefaAtual = evento.target.parentElement.firstChild.innerText;
        if (tarefaAtual === tarefa[0]) {
            listagemDasTarefas.removeChild(evento.target.parentElement);
        } 
    })  
}

//Estilização pelo DOM
listagemDasTarefas.style.display = "flex";
listagemDasTarefas.style.flexDirection = "column";
listagemDasTarefas.style.flexWrap = "wrap";
listagemDasTarefas.style.listStyle = "none";
listagemDasTarefas.style.gap = "1rem";

function estilizaTarefa() {
    let divTarefa = document.querySelectorAll(".tarefas__listagem__item");
    divTarefa.forEach(div => {
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.gap = "2rem";
    });
}