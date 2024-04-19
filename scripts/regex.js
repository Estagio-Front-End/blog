const regexCPF = /(\d{3})(\d{3})(\d{3})(\d{2})/gis;
const regexCNPJ = /(\d{2})(\d{3})(\d{3})(0001|0002)(\d{2})/gis;
const regexDataNascimento = /\d{2}[\/]\d{2}[\/]\d{4}/gis
const regexReal = /[\R\$]\d+[\,]\d{2}/gis
const regexEmail = /[a-z0-9]+[\-]?[\_]?[a-z0-9]+[\@][a-z]+[\.][a-z]+([\.][a-z]+)?/gis
const regexCelular = /[\(]\d{2}[\)][9]\d{4}[\-]\d{4}/gis

const regexOrdinario = /[.-]|[(]|[)]|[/]/gis;

const inputCPF = document.getElementById("cpf-regex");
const inputCNPJ = document.getElementById("cnpj-regex");
const inputData = document.getElementById("data-regex");
const inputReal = document.getElementById("monetario-regex");
const inputEmailRegex = document.getElementById("email-regex");
const inputCelular = document.getElementById("celular-regex");

let campos = [inputCPF, inputCNPJ, inputData, inputReal, inputEmailRegex, inputCelular];
let padroes = [regexCPF, regexCNPJ, regexDataNascimento, regexReal, regexEmail, regexCelular];

inputCPF.addEventListener('focus', evento => tirarMascara(evento))
inputCPF.addEventListener('blur', evento => mascaraCPF(evento))

inputCNPJ.addEventListener('focus', evento => tirarMascara(evento))
inputCNPJ.addEventListener('blur', evento => mascaraCNPJ(evento))

//Tem que ser uma função desse jeito, mas todas as máscaras numa função só com switch porque se não quando clicar em uma a outra some :(

function tirarMascara(evento) {
    inputCPF.value = evento.target.value.replace(regexOrdinario, "");
}

function mascaraCPF(evento){
    inputCPF.value = evento.target.value.replace(regexCPF, "$1.$2.$3-$4");
}

const botaoRegex = document.getElementById("botao-regex");

botaoRegex.addEventListener('click', evento => validaCampos(evento));

function validaCampos(evento) {
    evento.preventDefault();

    let validaVazio = inputCPF.value !== "" && inputCNPJ.value !== "" && inputData.value !== "" && inputReal.value !== "" && inputEmailRegex.value !== "" && inputCelular.value !== "";

    let isCPF = regexCPF.test(inputCPF.value);
    let isCNPJ = regexCNPJ.test(inputCNPJ.value);
    let isData = regexDataNascimento.test(inputData.value);
    let isReal = regexReal.test(inputReal.value);
    let isEmail = regexEmail.test(inputEmailRegex.value);
    let isCelular = regexCelular.test(inputCelular.value);

    retornaResultado(isCPF, isCNPJ, isData, isReal, isEmail, isCelular, validaVazio) 
}

function retornaResultado(isCPF, isCNPJ, isData, isReal, isEmail, isCelular, validaVazio) {
    let valores = [isCPF, isCNPJ, isData, isReal, isEmail, isCelular];
    let resultadoRegex = document.getElementById("resultado-regex");

    if(validaVazio) {
        campos.forEach((campo,index) => {
            resultadoRegex.innerHTML += `<p class="conteudo__texto">O campo ${campo.previousElementSibling.innerHTML} ${valores[index] ? "foi validado com regex e está correto" : "está incorreto"}</p>`
            })
    } else {
        resultadoRegex.innerHTML = "";
    }    

    limpaInputs(campos);
}

function limpaInputs (campos) {
    campos.forEach(campo => {campo.value = ""});  
}