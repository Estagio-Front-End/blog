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
const urlAPIFake = "https://cssblog.free.beeceptor.com";

async function coletarDadosAPI(){
    let resposta = await fetch(`${urlAPIFake}/artigos`)
    let dados = await resposta.json();
    
    return dados
}

//Mostrar comentários no artigo de API Fake
async function mostrarComentarios() {
    let dados = await coletarDadosAPI()
    document.querySelector("#artigo-api-fake").innerHTML = `<p class='conteudo__texto'>Comentários disponíveis: <br>
    ${dados.comentarios.map(comentario => {
        let indexArtigo = dados.artigos.findIndex(artigo => artigo.id === comentario.idArtigo);

        return `O comentário feito por ${comentario.nomeUsuario} no artigo ${dados.artigos[indexArtigo].titulo} foi: ${comentario.comentario}`
    })} ` 
}

//mostrarComentarios();

//Envio de dados para API
const formularioComentario = document["formulario-comentario"];

formularioComentario.addEventListener('submit', evento => {
    evento.preventDefault();
    enviarDadosFormulario(evento.target[0].value, evento.target[1].value, evento.target[2].value, evento.target[3].checked);
})

async function enviarDadosFormulario(nome, email, comentario, salvarInfo){
    let payload = criarBody(nome, email, comentario);
    let cabecalho = criarHeader();

    let resposta = await fetch(`${urlAPIFake}/comentarios`, {
        method: "POST",
        headers: cabecalho,
        body: payload
    })

    //Salvando informações no local storage
    if (resposta.ok) {        
        salvarInformacoesComentario(salvarInfo, nome, email);
    }

    //Retornando mensagem de sucesso ao enviar comentário se der certo e mensagem de erro de ser errado
    criarMensagemRetorno(resposta.ok);
}

function criarHeader() {
    let headers = {
        "Content-Type": "application/json"
    }

    return headers
}

function criarBody(nome, email, comentario) {
    let payload = {
        "idArtigo": location.pathname.slice(10,-5),
        "nomeUsuario": nome,
        "emailUsuario": email,
        "comentario": comentario
    }

    return payload
}

//Salvar nome+email no localStorage
function salvarInformacoesComentario(salvarInfo, nome, email) {
    if (salvarInfo) {
        localStorage.setItem("usuario", JSON.stringify({usuario: nome, email: email}))
    } else {
        localStorage.removeItem("usuario");
        inputEmail.value = "";
        inputNome.value = "";
    }
    inputComentario.value = "";
}

//Verificar se tem informações salvar no localStorage para colocar nos inputs de nome e e-mail
let infoUsuario = JSON.parse(localStorage.getItem("usuario"));
if (infoUsuario === null || infoUsuario === "") {
    inputNome.value = "";
    inputEmail.value = "";
} else {
    inputNome.value = infoUsuario.usuario;
    inputEmail.value = infoUsuario.email;   
}

//Criar caixa de mensagem deu certo/deu errado (método POST)
function criarMensagemRetorno(resposta) {
    
    const divResposta = document.createElement("div");
    const divCorResposta = document.createElement("div");
    const imagemResposta = document.createElement("img");
    const mensagemResposta = document.createElement("p");
    
    divResposta.appendChild(divCorResposta);
    divResposta.appendChild(imagemResposta);
    divResposta.appendChild(mensagemResposta);
    
    formularioComentario.appendChild(divResposta);
    divResposta.classList.add("artigo__formulario__resposta");

    if (resposta) {
        divResposta.classList.add("artigo__formulario__resposta--ok")
        imagemResposta.setAttribute("src", "../images/mensagem-ok.png")
        imagemResposta.setAttribute("alt", "Imagem de um símbolo de check verde indicando que tudo ocorreu como esperado")
        mensagemResposta.innerText = "Comentário enviado com sucesso!";
    } else {
        divResposta.classList.add("artigo__formulario__resposta--erro")
        imagemResposta.setAttribute("src", "../images/mensagem-erro.png")
        imagemResposta.setAttribute("alt", "Imagem de um X vermelho indicando um erro")
        mensagemResposta.innerText = "Houve um erro! Por favor, tente novamente!";
    }
    
    window.addEventListener('click', () => {
        divResposta.remove();    
    })
}
