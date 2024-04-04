const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputComentario = document.getElementById("comentario");
const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroComentario = document.getElementById("erro-comentario");
const botaoEnviarComentario = document.getElementById("botao-enviar-comentario");

document.getElementById("formulario").addEventListener('submit', (evento) => {
    let contadorErros = 0;
    if (inputNome.value === "") {
        erroNome.style.display = "block";
        if (window.screen.availWidth < 767) {
            erroNome.style.marginTop = "-1.2rem";
            erroNome.style.marginBottom = "1.6rem";
        }      
    } else {
        contadorErros++;
    }

    if (inputEmail.value === "" || inputEmail.value !== "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g") {
        erroEmail.style.display = "block";
    } else {
        contadorErros++;
    }

    if (inputComentario.value === "") {
        erroComentario.style.marginTop = "-0.8rem";
        erroComentario.style.display = "block";
    } else {
        contadorErros++;
    }

    if (contadorErros > 0) {
        evento.preventDefault();
    }
}) 