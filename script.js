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

const containerJustifyContent = document.querySelector(".conteudo__demonstracao__justify-content");

function justifyContent(value) {
    containerJustifyContent.style.justifyContent = value;
}

const containerAlignItems = document.querySelector(".conteudo__demonstracao__align-items");

function alignItems(value) {
    containerAlignItems.style.alignItems = value;
}

const containerAlignContent = document.querySelector(".conteudo__demonstracao__align-content");

function alignContent(value) {
    containerAlignContent.style.alignContent = value;
}

const containerFlexWrap = document.querySelector(".conteudo__demonstracao__flex-wrap");

function flexWrap(value) {
    containerFlexWrap.style.flexWrap = value;
}

const itemAlignSelf = document.querySelector("#align-self-item");

function alignSelf(value) {
    itemAlignSelf.style.alignSelf = value;
}
