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

//Abre/fecha do menu de navegação do conteúdo
const menuNavegacaoConteudo = document.querySelector('#menu-navegacao-conteudo');
if (menuNavegacaoConteudo !== null) {
    const iconeNavegacaoConteudo = menuNavegacaoConteudo.querySelector("img");
    menuNavegacaoConteudo.addEventListener('click', abrirOuFecharMenu)

    function abrirOuFecharMenu() {
        menuNavegacaoConteudo.nextElementSibling.classList.toggle("conteudo__navegacao__itens--ativo");
        iconeNavegacaoConteudo.classList.toggle("conteudo__navegacao__icone--ativo");
        iconeNavegacaoConteudo.classList.toggle("conteudo__navegacao__icone--inativo");
    }
} 

//Navegação no conteúdo
const linksMenuNavegacao = document.querySelectorAll(".conteudo__navegacao__itens li a");

if (linksMenuNavegacao !== null) {
    linksMenuNavegacao.forEach(link => link.addEventListener('click', evento => scrollSuaveParaSecao(evento)))
    
    function scrollSuaveParaSecao(evento) {
        evento.preventDefault();
        const linkDesejado = evento.currentTarget.getAttribute("href");
        const secaoDesejada = document.querySelector(linkDesejado);
        const headerMaisEspacamento = document.querySelector("header").offsetHeight + 20;
        
        const configScroll = {
            left: 0,
            top: (secaoDesejada.offsetTop - headerMaisEspacamento),
            behavior: "smooth"
        }
        window.scrollTo(configScroll);
    }
}

//Artigos Flexbox e Grid
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

//carrossel

let container = document.querySelector(".container");
let innerContainer = document.querySelector(".inner-container");

if (container !== null) {
    let pressed = false;
    let startX;
    let x;
    
    container.addEventListener("mousedown", (e) => {
        pressed = true;
        startX = e.offsetX - innerContainer.offsetLeft;
        container.style.cursor = "grabbing";
    });
    
    container.addEventListener("mouseenter", () => {
        container.style.cursor = "grab";
    });
    
    container.addEventListener("mouseup", () => {
        container.style.cursor = "grab";
        pressed = false;
    });
    
    container.addEventListener("mousemove", (e) => {
        if (!pressed) return;
        e.preventDefault();
    
        x = e.offsetX;
        innerContainer.style.left = `${x - startX}px`;
    });

    let boundItems = () => {
        let outer = container.getBoundingClientRect();
        let inner = innerContainer.getBoundingClientRect();
    
        if (parseInt(innerContainer.style.left) > 0) {
        innerContainer.style.left = "0px";
        }
    
        if (inner.right < outer.right) {
        innerContainer.style.left = `-${inner.width - outer.width}px`;
        }
    };

    container.addEventListener("mousemove", (e) => {
        if (!pressed) return;
        e.preventDefault();
    
        x = e.offsetX;
        innerContainer.style.left = `${x - startX}px`;
        boundItems();
    });
}