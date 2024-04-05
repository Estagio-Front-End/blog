const inputNome = document["formulario-comentario"].nome;
const inputEmail = document["formulario-comentario"].email;
const inputComentario = document["formulario-comentario"].comentario;
const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroComentario = document.getElementById("erro-comentario");
const botaoEnviarComentario = document.getElementById("botao-enviar-comentario");

//Validação dos campos
const inputsFormulario = [inputNome, inputEmail, inputComentario];
inputsFormulario.forEach((input) => {
    input.addEventListener('input', habilitacaoBotao);
    input.addEventListener('blur', evento => verificaInput(evento));
});

function verificaInput(evento) {
    const regExEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const regExVazio = /^(?=\s*$)/;

    switch (evento.target.id) {
        case "nome":
            if (inputNome.value === "" || regExVazio.test(inputNome.value)) {
                erroNome.style.display = "block";
                if (window.screen.availWidth < 767) {
                    erroNome.style.marginTop = "-1.2rem";
                    erroNome.style.marginBottom = "1.6rem";
                }
            } else {
                erroNome.style.display = "none";
            }
            break;
        case "email":
            if (inputEmail.value === "" || !regExEmail.test((inputEmail.value))){
                erroEmail.style.display = "block";
            } else {
                erroEmail.style.display = "none";
            }
            break;
        case "comentario":
            if (inputComentario.value === "" || regExVazio.test(inputComentario.value)) {
                erroComentario.style.marginTop = "-0.8rem";
                erroComentario.style.display = "block";
            } else {
                erroComentario.style.display = "none";
            }
            break;
        default:
            console.log("Algum erro aconteceu");
            break;       
    }
}

//Clique no checkbox
const inputCheckbox = document.getElementById("salvar-info");
const imagemCheckbox = document.getElementById("salvar-info-imagem");
const botaoCheckbox = document.getElementById("salvar-info-botao");

imagemCheckbox.addEventListener('click', (evento) => {
    if (!inputCheckbox.checked) {
        evento.target.alt = "Clique para não salvar suas informações para próximos comentários.";
        evento.target.src = "../images/checkbox-marcado.svg";
        inputCheckbox.checked = true; 
    } else {
        evento.target.alt = "Clique para salvar suas informações para próximos comentários.";
        evento.target.src = "../images/checkbox-vazio.svg";
        inputCheckbox.checked = false; 
    }
})

botaoCheckbox.addEventListener('keypress', (evento) => {
    console.log(evento)
    if (evento.key === "Enter") {
        if (!inputCheckbox.checked) {
            evento.target.firstChild.alt = "Clique para não salvar suas informações para próximos comentários.";
            evento.target.firstChild.src = "../images/checkbox-marcado.svg";
            inputCheckbox.checked = true; 
        } else {
            console.log(evento.key)
            evento.target.firstChild.alt = "Clique para salvar suas informações para próximos comentários.";
            evento.target.firstChild.src = "../images/checkbox-vazio.svg";
            inputCheckbox.checked = false; 
        }
    } 
})

//Enable/disable do botão de enviar
function habilitacaoBotao() {
    //const validacaoDisplayErros = erroNome.style.display === "none" && erroEmail.style.display === "none" && erroComentario.style.display === "none";
    const validacaoCamposVazios = inputNome.value !== "" && inputEmail.value !== "" && inputComentario.value !== "";
    if (validacaoCamposVazios) {
        botaoEnviarComentario.classList.add("botao__primario--enabled");
        botaoEnviarComentario.removeAttribute("disabled", "");
    } else {
        botaoEnviarComentario.classList.remove("botao__primario--enabled");
        botaoEnviarComentario.setAttribute("disabled", "");
    }
} 




