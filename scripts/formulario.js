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

const regExEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExVazio = /^(?=\s*$)/;

function verificaInput(evento) {
    switch (evento.target.id) {
        case "nome":
            if (inputNome.value === "" || regExVazio.test(inputNome.value)) {
                erroNome.style.display = "block";
                //msgErroNome +=1; 
            } else {
                erroNome.style.display = "none";
                //msgErroNome -=1; 
            }
            break;
        case "email":
            if (inputEmail.value === "" || !regExEmail.test((inputEmail.value))){
                erroEmail.style.display = "block";
                //msgErroEmail +=1; 
            } else {
                erroEmail.style.display = "none";
                //msgErroEmail -=1; 
            }
            break;
        case "comentario":
            if (inputComentario.value === "" || regExVazio.test(inputComentario.value)) {
                erroComentario.style.marginTop = "-0.8rem";
                erroComentario.style.display = "block";
                //msgErroComentario +=1; 
            } else {
                erroComentario.style.display = "none";
                //msgErroComentario -=1; 
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
});

botaoCheckbox.addEventListener('keypress', (evento) => {
    if (evento.key === "Enter") {
        if (!inputCheckbox.checked) {
            evento.target.firstChild.alt = "Clique para não salvar suas informações para próximos comentários.";
            evento.target.firstChild.src = "../images/checkbox-marcado.svg";
            inputCheckbox.checked = true; 
        } else {
            evento.target.firstChild.alt = "Clique para salvar suas informações para próximos comentários.";
            evento.target.firstChild.src = "../images/checkbox-vazio.svg";
            inputCheckbox.checked = false; 
        }
    } 
});

//Enable/disable do botão de enviar
function habilitacaoBotao() {
    const validacaoCompletaCampos = !(inputNome.value === "" || regExVazio.test(inputNome.value)) && !(inputEmail.value === "" || !regExEmail.test((inputEmail.value))) && !(inputComentario.value === "" || regExVazio.test(inputComentario.value));

    if (validacaoCompletaCampos) {
        botaoEnviarComentario.classList.add("botao__primario--enabled");
        botaoEnviarComentario.removeAttribute("disabled", "");
    } else {
        botaoEnviarComentario.classList.remove("botao__primario--enabled");
        botaoEnviarComentario.setAttribute("disabled", "");
    }
} 

//Consumo API Fake
const urlAPIFake = "https://mocki.io/v1/f366cd70-97b8-486e-b4bc-02ac6fc915e1";

async function coletarDadosAPI(){
    let resposta = await fetch(urlAPIFake)
    let dados = await resposta.json();
    console.log(dados);

    document.querySelector("article").innerHTML = `<p class='conteudo__texto'>Comentários disponíveis: <br>
        ${dados.comentarios.map(comentario => {
            let indexArtigo = dados.artigos.findIndex(artigo => artigo.id === comentario.idArtigo);

            return `O comentário feito por ${comentario.nomeUsuario} no artigo ${dados.artigos[indexArtigo].titulo} foi: ${comentario.comentario}`
        })} `  
}

coletarDadosAPI();

async function enviarDadosFormulario(nome, email, comentario, salvarInfo){
    let resposta = await fetch(`${urlAPIFake}/comentarios`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: `{
            "id": ${dados.comentarios.length+1},
            "idArtigo": "${location.pathname.slice(10,-5)}",
            "nomeUsuario": ${nome},
            "emailUsuario": ${email},
            "comentario": ${comentario}
        }`  
    })

    //Retornando mensagem de sucesso ao enviar comentário se der certo e mensagem de erro de ser errado
    if (resposta.ok) {

    } else {

    }

    //Salvar nome+email no localStorage
    if (salvarInfo) {

    } else {
        
    }   
}


