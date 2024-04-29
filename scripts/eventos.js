//Seleção do elemento
const botaoExemplo1 = document.getElementById("botao1-eventos");

//Acoplamento do "escutador" de evento
botaoExemplo1.addEventListener('click', mudaCorBotao)

//Definição da função de callback
function mudaCorBotao() {
    let numeroRed = Math.floor(Math.random()*255);
    let numeroGreen = Math.floor(Math.random()*255);
    let numeroBlue = Math.floor(Math.random()*255);
    botaoExemplo1.style.backgroundColor = `rgb(${numeroRed}, ${numeroGreen}, ${numeroBlue})`
}

