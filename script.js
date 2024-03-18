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

//Propriedades do flexbox
const containerFlexDirection = document.querySelector(".conteudo__demonstracao__flex-direction");
const containerFlexWrap = document.querySelector(".conteudo__demonstracao__flex-wrap");

//Propriedades do grid
const containerJustifyItems = document.querySelector(".conteudo__demonstracao__justify-items--grid");
const itemJustifySelf = document.querySelector("#justify-self-grid-item");
const containerGridAutoFlow = document.querySelector(".conteudo__demonstracao__grid-auto-flow");

let artigoAtual = location.pathname;

if (artigoAtual.includes('/articles/flexbox.html')) {
    containerJustifyContent = document.querySelector(".conteudo__demonstracao__justify-content");
    containerAlignItems = document.querySelector(".conteudo__demonstracao__align-items");
    containerAlignContent = document.querySelector(".conteudo__demonstracao__align-content");
    itemAlignSelf = document.querySelector("#align-self-item");
} else if (artigoAtual.includes('/articles/grid.html')) {
    containerJustifyContent = document.querySelector(".conteudo__demonstracao__justify-content--grid");
    containerAlignContent = document.querySelector(".conteudo__demonstracao__align-content--grid");
    containerAlignItems = document.querySelector(".conteudo__demonstracao__align-items--grid");
    itemAlignSelf = document.querySelector("#align-self-grid-item");  
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

function justifyItems(value) {
    containerJustifyItems.style.justifyItems = value;
}

function justifySelf(value) {
    itemJustifySelf.style.justifySelf = value;
}

function gridAutoFlow(value){
    containerGridAutoFlow.style.gridAutoFlow = value;
}
