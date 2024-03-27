let checkboxIf = document.getElementById("condicional-if");
let checkboxIfElse = document.getElementById("condicional-if-else");
let checkboxElseIf = document.getElementById("condicional-else-if");
let checkboxAninhado = document.getElementById("condicional-aninhada");
let containerResultado = document.getElementById("resultado-condicionais");

let listaCheckbox = [checkboxIf, checkboxIfElse, checkboxElseIf, checkboxAninhado];

listaCheckbox.forEach (checkbox => {
    checkbox.addEventListener('click', mostraEstruturaCondicional);
});

function mostraEstruturaCondicional () {
    if (checkboxIf.checked) {
        containerResultado.innerHTML = '<p class="conteudo__texto"><code>if (condição1) {<br> &nbsp; //bloco de código a ser executado caso a condição seja verdadeira.<br>}</code></p>';
    } else if (checkboxIfElse.checked) {
        containerResultado.innerHTML = '<p class="conteudo__texto"><code>if (condição1) {<br> &nbsp; //bloco de código a ser executado caso a condição seja verdadeira.<br>} else {<br> &nbsp; //bloco de código a ser executado caso a condição seja falsa.<br>}</code></p>';
    } else if (checkboxElseIf.checked) {
        containerResultado.innerHTML = '<p class="conteudo__texto"><code>if (condição1) {<br> &nbsp; //bloco de código a ser executado caso a condição seja verdadeira.<br>} else if (condição2) {<br> &nbsp; //bloco de código a ser executado caso a primeira condição seja falsa, mas a segunda condição seja verdadeira.<br>}</code></p>';
    } else if (checkboxAninhado.checked){
        containerResultado.innerHTML = '<p class="conteudo__texto"><code>if (condição1) {<br> &nbsp; if (condição2) {<br> &nbsp; //bloco de código a ser executado se a primeira e segunda condições forem verdadeiras.<br> &nbsp; }<br> &nbsp; //bloco de código a ser executado se somente a primeira condição for verdadeira.<br>}</code></p>';
    } else {
        containerResultado.innerHTML = "";
    }
}

//Operadores de comparação
const inputNumber1 = document.querySelector("#numero1-comparacao");
const inputNumber2 = document.querySelector("#numero2-comparacao");
const selectOperacoesComparacao = document.querySelector("#operacoes-comparacao");
const botaoOperacoesComparacao = document.querySelector("#comparar-number");
const exibeResultadoOperacoesComparacao = document.querySelector("#resultado-operacao-comparacao");

botaoOperacoesComparacao.addEventListener('click', comparaNumeros);

function comparaNumeros() {
    let valor1 = Number(inputNumber1.value);
    let valor2 = Number(inputNumber2.value);
    
    if (valor1 != "" && Number.isNaN(valor1) == false && valor2 != "" && Number.isNaN(valor2)== false) {
        switch (selectOperacoesComparacao.value) {
                case "maior":
                    exibeResultadoOperacoesComparacao.innerHTML = `<p class="conteudo__texto"><b>O resultado da comparação ${valor1} > ${valor2} é: ${valor1 > valor2}</b></p>`;
                    break;
                case "menor":
                    exibeResultadoOperacoesComparacao.innerHTML = `<p class="conteudo__texto"><b>O resultado da comparação ${valor1} < ${valor2} é: ${valor1 < valor2}</b></p>`;
                    break;
                case "maior-igual":
                    exibeResultadoOperacoesComparacao.innerHTML = `<p class="conteudo__texto"><b>O resultado da comparação ${valor1} >= ${valor2} é: ${valor1 >= valor2}</b></p>`;
                    break;
                case "menor-igual":
                    exibeResultadoOperacoesComparacao.innerHTML = `<p class="conteudo__texto"><b>O resultado da comparação ${valor1} <= ${valor2} é: ${valor1 <= valor2}</b></p>`;
                    break;
                case "diferente":
                    exibeResultadoOperacoesComparacao.innerHTML = `<p class="conteudo__texto"><b>O resultado da comparação ${valor1} !== ${valor2} é: ${valor1 !== valor2}</b></p>`;
                    break;
                case "igual":
                    exibeResultadoOperacoesComparacao.innerHTML = `<p class="conteudo__texto"><b>O resultado da comparação ${valor1} === ${valor2} é: ${valor1 === valor2}</b></p>`;
                    break; 
        }    
    } else {
        alert("Um dos valores está vazio ou não contém um número, tente novamente!");
    }
    inputNumber1.value = "";
    inputNumber2.value = "";
}

//Operadores lógicos

const botaoTesteOperacao = document.querySelector("#testar-numeros");
botaoTesteOperacao.addEventListener('click', testaNumeros);

function testaNumeros () {
    let valorX = Number(document.getElementById("input-x").value);
    let valorY = Number(document.getElementById("input-y").value);
    let valorZ = Number(document.getElementById("input-z").value);

    condicaoTeste = valorX != "" && Number.isNaN(valorX) == false && valorY != "" && Number.isNaN(valorY) == false && valorZ != "" && Number.isNaN(valorZ) == false;

    if (condicaoTeste) {
        if (((valorX) === 5) || (valorY >= 5) && !(valorZ < 10)) {
            alert("Você conseguiu executar o bloco de código!");
        } else {
            alert("Você não conseguiu executar o bloco de código!");
        }
    } else {
        alert("Um dos valores não foi indicado ou não é um número. Tente novamente!")
    }
}

