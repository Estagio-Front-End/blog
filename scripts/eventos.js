//Definições
const botaoExemplo1 = document.getElementById("botao1-eventos");

botaoExemplo1.addEventListener('click', mudaCorBotao)

function mudaCorBotao() {
    let numeroRed = Math.floor(Math.random()*255);
    let numeroGreen = Math.floor(Math.random()*255);
    let numeroBlue = Math.floor(Math.random()*255);
    botaoExemplo1.style.backgroundColor = `rgb(${numeroRed}, ${numeroGreen}, ${numeroBlue})`
}

//preventDefault()
const botaoExemplo2 = document.getElementById("botao2-eventos");
const botaoExemplo3 = document.getElementById("botao3-eventos");
const formularioExemplo = document.getElementById("formulario-exemplo")

formularioExemplo.addEventListener('submit', acaoDefault);

function acaoDefault() {
    alert("O formulário foi submetido e a página foi recarregada")
}

botaoExemplo3.addEventListener('click', evento => pararAcaoDefault(evento))

function pararAcaoDefault(evento) {
    evento.preventDefault()
    const paragrafoResultado = document.querySelector("#resultado-prevent");
    paragrafoResultado.innerHTML = "O método <code>preventDefault()</code> fez com que a página não fosse recarregada, o formulário não fosse submetido e, por consequência disso, o campo de texto não fosse validado com a validação do navegador."
}

//Outros eventos
window.addEventListener('scroll', mostraListaEventos)

function mostraListaEventos(){
    const tituloListaEventos = document.getElementById("checkpoint-scroll");

    if(window.scrollY > document.getElementById("checkpoint-scroll").getBoundingClientRect().top) {
        tituloListaEventos.nextElementSibling.style.display = "none";
        tituloListaEventos.nextElementSibling.nextElementSibling.style.display = "block";
    } else {
        tituloListaEventos.nextElementSibling.nextElementSibling.style.display = "none";
        tituloListaEventos.nextElementSibling.style.display = "block";
    }
}


let itensListaEventos = Array.from(document.querySelectorAll(".conteudo__texto__item"))

itensListaEventos.forEach(item => item.addEventListener('mouseenter', evento => escureceFonte(evento)));
itensListaEventos.forEach(item => item.addEventListener('mouseleave', evento => clareiaFonte(evento)));

function escureceFonte(evento) {
    evento.target.style.color = "black";
}

function clareiaFonte(evento) {
    evento.target.style.color = "#5b5b5b";
}