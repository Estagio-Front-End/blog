window.addEventListener('scroll', () => {
    (window.scrollY > 0) 
    ? document.querySelector("header").style.backgroundColor = "#1F2041" 
    : document.querySelector("header").style.backgroundColor = "rgba(18, 19, 38, 0.5)"
}); 

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














