const inputParaParagrafo =  document.getElementById("modifica-elementos")
const botaoInnerHTML =  document.getElementById("add-inner-html")
const botaoInnerText =  document.getElementById("add-inner-text")
const botaoOuterHTML =  document.getElementById("add-outer-html")
const textoInnerText = document.getElementById("inner-text")
const containerResultado =  document.getElementById("resultado-propriedades")

const botoesPropriedades = [botaoInnerHTML, botaoInnerText, botaoOuterHTML]
botoesPropriedades.forEach(botao => botao.addEventListener('click', evento => executaAcao(evento)))

function executaAcao(evento) {
    if (inputParaParagrafo.value !== "") {
        let botaoPressionado = evento.target.id;
        if (botaoPressionado === "add-inner-html") {
            containerResultado.innerHTML += `<h3 class="conteudo__texto">${inputParaParagrafo.value}</h3>`
        } else if (botaoPressionado === "add-outer-html") {
            containerResultado.outerHTML = `<h3 class="conteudo__texto">${inputParaParagrafo.value}</h3>`
        } else if (botaoPressionado === "add-inner-text") {
            textoInnerText.innerText = `${inputParaParagrafo.value}`;
        } else {
            alert("Ocorreu um erro, tente novamente mais tarde!")
        }
    } else {
        alert("Digite algo no campo de texto para testar as propriedades!")
    }
}