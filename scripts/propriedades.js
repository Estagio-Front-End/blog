const inputParaParagrafo =  document.getElementById("modifica-elementos")
const botaoInnerHTML =  document.getElementById("add-inner-html")
const botaoInnerText =  document.getElementById("add-inner-text")
const botaoOuterHTML =  document.getElementById("add-outer-html")
const textoInnerText = document.getElementById("inner-text")
const elementoOuterHTML = document.getElementById("outer-html")
const containerResultado =  document.getElementById("resultado-propriedades")

const botoesPropriedades = [botaoInnerHTML, botaoInnerText, botaoOuterHTML]
botoesPropriedades.forEach(botao => botao.addEventListener('click', evento => executaAcao(evento)))

function executaAcao(evento) {
    if (inputParaParagrafo.value !== "") {
        let botaoPressionado = evento.target.id;
        switch(botaoPressionado) {
            case "add-inner-html":
                containerResultado.innerHTML += `<h3>${inputParaParagrafo.value}</h3>`;
            break;
            case "add-outer-html":
                elementoOuterHTML.outerHTML = `<h3>${inputParaParagrafo.value}</h3>`;
            break;
            case "add-inner-text":
                textoInnerText.innerText = inputParaParagrafo.value;
            break;
            default:
                alert("Ocorreu um erro, tente novamente mais tarde!");
            break;
        }
    } else {
        alert("Digite algo no campo de texto para testar as propriedades!")
    }
}