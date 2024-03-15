const botaoMenu = document.querySelector(".navegacao__botao--responsiva");
const listaMenu = document.querySelector(".navegacao__listagem--responsiva");
let menuAberto = false;

botaoMenu.addEventListener("click", mudarMenu);

function mudarMenu () {
    if (menuAberto == false) {
        listaMenu.style.display = "block";
        menuAberto = true;
    } else {
       listaMenu.style.display = "none";
       menuAberto = false;
    }  
};

//Propriedades que se repetem em flexbox e grid
let containerJustifyContent;
let containerAlignItems;
let containerAlignContent;
let itemAlignSelf;

//Propriedades exclusivas do flexbox
const containerFlexDirection = document.querySelector(".conteudo__demonstracao__flex-direction");
const containerFlexWrap = document.querySelector(".conteudo__demonstracao__flex-wrap");

let artigoAtual = location.pathname;

if (artigoAtual.includes('/articles/flexbox.html')) {
    containerJustifyContent = document.querySelector(".conteudo__demonstracao__justify-content");
    containerAlignItems = document.querySelector(".conteudo__demonstracao__align-items");
    containerAlignContent = document.querySelector(".conteudo__demonstracao__align-content");
    itemAlignSelf = document.querySelector("#align-self-item");
} else if (artigoAtual.includes('/articles/grid.html')) {
    //Classes no artigo de grid para as propriedades que se repetem.
}

function flexDirection(value) {
    containerFlexDirection.style.flexDirection = value;
}

function justifyContent(value) {
    containerJustifyContent.style.justifyContent = value;
}

function alignItems(value) {
    containerAlignItems.style.alignItems = value;
}

function alignContent(value) {
    containerAlignContent.style.alignContent = value;
}

function flexWrap(value) {
    containerFlexWrap.style.flexWrap = value;
}

function alignSelf(value) {
    itemAlignSelf.style.alignSelf = value;
}
