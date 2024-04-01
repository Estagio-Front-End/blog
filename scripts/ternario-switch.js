//Operador ternário
const primeiraCaixaSelecao = document.getElementById("primeira-caixa");
const segundaCaixaSelecao = document.getElementById("segunda-caixa");
const botaoTesteTernario = document.getElementById("teste-ternario");
const resultadoTernario = document.getElementById("resultado-ternario");

botaoTesteTernario.addEventListener('click', mostraResultadoTernario);

function mostraResultadoTernario() {
    primeiraCaixaSelecao.checked 
        ? resultadoTernario.innerHTML = '<p class="conteudo__texto" style="display: inline-block"><b>A primeira caixa foi selecionada </b></p>' 
        : resultadoTernario.innerHTML = '<p class="conteudo__texto" style="display: inline-block"><b>A primeira caixa não foi selecionada </b></p>', 
        segundaCaixaSelecao.checked 
            ? resultadoTernario.innerHTML += '<p style="display: inline-block" class="conteudo__texto"><b>&nbsp;e a segunda caixa foi selecionada.</b></p>' 
            : resultadoTernario.innerHTML += '<p style="display: inline-block" class="conteudo__texto"><b>&nbsp;e a segunda caixa não foi selecionada.</b></p>';
}

//Switch
const primeiraCorSelecao = document.getElementById("cor1");
const segundaCorSelecao = document.getElementById("cor2");
const terceiraCorSelecao = document.getElementById("cor3");
const quartaCorSelecao = document.getElementById("cor4");
const resultadoSwitch = document.getElementById("resultado-switch");

let listaCoresSelecao = [primeiraCorSelecao, segundaCorSelecao, terceiraCorSelecao, quartaCorSelecao];
listaCoresSelecao.forEach(cor => cor.addEventListener('click', mudaCorBorda));

function mudaCorBorda(evento) {
    let cor;
    
    switch(evento.target.id) {
        case "cor1": 
            cor = "yellowgreen";
            break;
        case "cor2": 
            cor = "aqua";
            break;
        case "cor3": 
            cor = "pink";
            break;
        case "cor4": 
            cor = "orangered";
            break; 
        default:
            cor = "white";
            break;  
    }

    resultadoSwitch.style.height = "2rem";
    resultadoSwitch.style.marginTop = "1rem";
    resultadoSwitch.style.backgroundColor = cor;
}