window.addEventListener('scroll', () => {
    (window.scrollY > 0) 
    ? document.querySelector("header").style.backgroundColor = "#1F2041" 
    : document.querySelector("header").style.backgroundColor = "rgba(18, 19, 38, 0.5)"
}); 

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

let idiomas = [
    {
        nome: "PT", 
        icone: "../images/icon-ptbr.svg", 
        iconeIndex: "images/icon-ptbr.svg",
        textoAltIcone: "Alterar idioma para português brasileiro"
    }, 
    {
        nome: "EN", 
        icone: "../images/icon-ingles.svg", 
        iconeIndex: "images/icon-ingles.svg",
        textoAltIcone: "Alterar idioma para inglês"
    }, 
    {
        nome: "ES",
        icone: "../images/icon-espanhol.svg",
        iconeIndex: "images/icon-espanhol.svg",
        textoAltIcone: "Alterar idioma para espanhol"
    }]

let listaIdiomas = document.querySelector(".idiomas ul");
let idiomasItens = listaIdiomas.querySelectorAll("li span");

idiomasItens.forEach((item, index) => item.innerText = idiomas[index].nome);

listaIdiomas.querySelectorAll(".idiomas__item__imagem").forEach((imagem, index) => {
    if(location.pathname.includes("index.html")) {
        imagem.setAttribute('src', idiomas[index].iconeIndex);
    } else {
        imagem.setAttribute('src', idiomas[index].icone);
    }
    imagem.setAttribute('alt', idiomas[index].textoAltIcone);
})

Array.from(listaIdiomas.children).forEach((item) => {
    if (item.className.includes("idiomas__item--ativo")) {
        item.style.display = "flex";
    } else {
        item.style.display = "none";
    }
})














