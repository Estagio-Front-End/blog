const regexCPF = /(\d{3})[\.]?(\d{3})[\.]?(\d{3})[\-]?(\d{2})/gis;
const regexCNPJ = /(\d{2})[\.]?(\d{3})[\.]?(\d{3})[\/]?(0001|0002)[\-]?(\d{2})/gis;
const regexDataNascimento = /(\d{2})[\/]?(\d{2})[\/]?(\d{4})/gis
const regexReal = /(\d+)(\,)(\d{2})/gis
const regexEmail = /[a-z0-9]+[\-]?[\_]?[a-z0-9]+[\@][a-z]+[\.][a-z]+([\.][a-z]+)?/gis
const regexCelular = /[\(]?(\d{2})[\)]?[\s]?([9])(\d{4})[\-]?(\d{4})/gis

const regexOrdinario = /[.-]|[(]|[)]|[/]|[R]|[$]|[\s]/gis;

const inputCPF = document.getElementById("cpf-regex");
const inputCNPJ = document.getElementById("cnpj-regex");
const inputData = document.getElementById("data-regex");
const inputReal = document.getElementById("monetario-regex");
const inputEmailRegex = document.getElementById("email-regex");
const inputCelular = document.getElementById("celular-regex");

let campos = [inputCPF, inputCNPJ, inputData, inputReal, inputEmailRegex, inputCelular];
let padroes = [regexCPF, regexCNPJ, regexDataNascimento, regexReal, regexEmail, regexCelular];

campos.forEach(campo => campo.addEventListener('focus', evento => tirarMascara(evento)))
campos.forEach(campo => campo.addEventListener('blur', evento => colocarMascara(evento)))

function tirarMascara(evento) {
    let input = evento.target;
    if (input === inputCPF || input === inputCNPJ || input === inputData || input === inputReal || input === inputCelular) {
        input.value = evento.target.value.replace(regexOrdinario, "");
    } else if (input === inputEmailRegex) {
        input.value = evento.target.value;
    } else {
        alert("Ocorreu um erro, tente novamente mais tarde.");
    } 
}

function colocarMascara(evento){
    switch (evento.target) {
        case inputCPF:
            inputCPF.value = evento.target.value.replace(regexCPF, "$1.$2.$3-$4");
        break;
        case inputCNPJ:
            inputCNPJ.value = evento.target.value.replace(regexCNPJ, "$1.$2.$3/$4-$5");
        break;
        case inputData:
            inputData.value = evento.target.value.replace(regexDataNascimento, "$1/$2/$3");
        break;
        case inputReal:
            inputReal.value = evento.target.value.replace(regexReal, "R$ $1$2$3");
        break;
        case inputEmailRegex:
            inputEmailRegex.value = evento.target.value;
        break;
        case inputCelular:
            inputCelular.value = evento.target.value.replace(regexCelular, "($1) $2$3-$4");
        break;

    }
}

//Validação dos campos com Regex
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