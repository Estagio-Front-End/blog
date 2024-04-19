const regexCPF = new RegExp("\d{3}\.\d{3}\.\d{3}\-\d{2}","g")
const regexCNPJ = new RegExp("\d{2}\.\d{3}\.\d{3}\/(0001|0002)\-\d{2}", "g")
const regexDataNascimento = new RegExp("\d{2}\/\d{2}\/\d{4}", "g")
const regexReal = new RegExp("\R\$ \d\,\d{2}", "g")
const regexEmail = new RegExp("", "g")
const regexCelular = new RegExp("\(\d{2}\) 9\d{4}\-\d{4}", "g")

const inputCPF = document.getElementById("cpf-regex");
const inputCNPJ = document.getElementById("cnpj-regex");
const inputData = document.getElementById("data-regex");
const inputReal = document.getElementById("monetario-regex");
const inputEmail = document.getElementById("email-regex");
const inputCelular = document.getElementById("celular-regex");

const botaoRegex = document.getElementById("botao-regex");

botaoRegex.addEventListener('click', () => {
    let valores = validaCampos();
    let campos = ["CPF", "CNPJ", "Data de Nascimento", "Valor monetário", "E-mail", "Telefone celular"];
    let resultadoRegex = document.getElementById("resultado-regex");
    
    campos.forEach((campo,index) => {
        resultadoRegex.innerHTML = `<p class="conteudo__texto">O campo ${campo} ${valores[index] ? "foi validado e está correto" : "não foi validado e está incorreto"}</p>`
        })
    })

function validaCampos() {
    let isCPF = regexCPF.test(inputCPF.value)
    let isCNPJ = regexCNPJ.test(inputCNPJ.value)
    let isData = regexDataNascimento.test(inputData.value)
    let isReal = regexReal.test(inputReal.value)
    let isEmail = regexEmail.test(inputEmail.value)
    let isCelular = regexCelular.test(inputCelular.value)

    return [isCPF, isCNPJ, isData, isReal, isEmail, isCelular]
}