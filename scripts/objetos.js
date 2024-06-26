//Manipulação de objetos
localStorage.setItem("objeto", JSON.stringify({nome: "Camila", idade: 29, cargo: "Estagiária",}));

const inputPropriedade = document.querySelector("#chave");
const inputValor = document.querySelector("#valor");
const botaoAdicionar = document.querySelector("#adicionar-propriedade");
const botaoRemover = document.querySelector("#remover-propriedade");
const botaoModificar = document.querySelector("#modificar-propriedade");
const botaoVerificar = document.querySelector("#verificar-propriedade");
const botaoAcessar = document.querySelector("#acessar-propriedade");
const botaoMostrar = document.querySelector("#mostrar-objeto");
const containerResultado = document.querySelector("#resultado");

botaoAdicionar.addEventListener('click', adicionaPropriedade);
botaoRemover.addEventListener('click', removerPropriedade);
botaoModificar.addEventListener('click', modificarPropriedade);
botaoVerificar.addEventListener('click', verificarExistenciaPropriedade);
botaoAcessar.addEventListener('click', acessarPropriedade);
botaoMostrar.addEventListener('click', mostrarObjeto);

function adicionaPropriedade() {
    if (inputPropriedade.value == "" && inputValor.value == "") {
        alert("Ambos os inputs devem estar preenchidos para adicionar uma nova propriedade!");     
    } else if ((inputPropriedade.value.toLowerCase() in JSON.parse(localStorage.getItem("objeto"))) === true) {
        alert("Esta propriedade já existe! Se quiser modificá-la, clique em 'Modificar Propriedade'");
    } else {
        containerResultado.innerHTML = "";
        let objeto = JSON.parse(localStorage.getItem("objeto"));
        objeto[inputPropriedade.value.toLowerCase()] = inputValor.value;
        localStorage.setItem("objeto", JSON.stringify(objeto));
    }
    inputPropriedade.value = "";
    inputValor.value = "";
}

function removerPropriedade() {
    if (inputPropriedade.value === "") {
        alert("É necessário indicar uma propriedade a ser removida!");
    } else if ((inputPropriedade.value.toLowerCase() in JSON.parse(localStorage.getItem("objeto"))) === false) {
        alert("Esta propriedade não existe no objeto, não há como removê-la!");
    } else {
        containerResultado.innerHTML = "";
        let objeto = JSON.parse(localStorage.getItem("objeto"));
        delete objeto[inputPropriedade.value.toLowerCase()];
        localStorage.setItem("objeto", JSON.stringify(objeto));
    }
    inputPropriedade.value = "";
    inputValor.value = "";
}

function verificarExistenciaPropriedade() { 
    if (inputPropriedade.value !== "") {
        containerResultado.innerHTML = "";
        let objeto = JSON.parse(localStorage.getItem("objeto"));
        (inputPropriedade.value.toLowerCase() in objeto) === true 
        ? alert("Esta propriedade existe no objeto!") 
        : alert("Esta propriedade não existe no objeto!"); 
    } else {
        alert("É necessário indicar uma propriedade a ser verificada!");
    }
    inputPropriedade.value = "";
    inputValor.value = "";
}

function modificarPropriedade() {
    if (inputPropriedade.value === "" && inputValor.value === "") {
        alert("É necessário indicar a propriedade a ser modificada e seu novo valor!");
    } else if ((inputPropriedade.value.toLowerCase() in JSON.parse(localStorage.getItem("objeto"))) === false) {
        alert("Esta propriedade não existe no objeto, para adicionar uma propriedade, clique em 'Adicionar Propriedade'!");
    } else {
        containerResultado.innerHTML = "";
        let objeto = JSON.parse(localStorage.getItem("objeto"));
        objeto[inputPropriedade.value.toLowerCase()] = inputValor.value;
        localStorage.setItem("objeto", JSON.stringify(objeto));
    }
    inputPropriedade.value = "";
    inputValor.value = "";
}

function acessarPropriedade () {
    if (inputPropriedade.value === "") {
        alert("É necessário indicar a propriedade a ser acessada!");
    } else if ((inputPropriedade.value.toLowerCase() in JSON.parse(localStorage.getItem("objeto"))) === false) {
        alert("Esta propriedade não existe no objeto!");
    } else {
        containerResultado.innerHTML = "";
        let objeto = JSON.parse(localStorage.getItem("objeto"));
        containerResultado.innerHTML = `<p class="conteudo__texto">O valor da propriedade ${inputPropriedade.value.toLowerCase()} é ${objeto[inputPropriedade.value.toLowerCase()]}</p>`;
    }
    inputPropriedade.value = "";
    inputValor.value = "";
}

function mostrarObjeto() {
    containerResultado.innerHTML = "";
    let objeto = localStorage.getItem("objeto");

    if (objeto === "{}") {
        containerResultado.innerHTML = '<p class="conteudo__texto">O objeto está vazio!</p>'
    } else {
        containerResultado.innerHTML = `<p class="conteudo__texto"> ${objeto} </p>`;
    }
}

//Getters e Setters
const containerGetter = document.getElementById("resultado-getter");
const inputSetter = document.getElementById("setter");

var objeto2 = { 
    nome: "Camila",
    idade: 29,
    cargo: "Estagiária",
    
    get valorObjeto() { 
        return `<b>O nome da autora deste artigo é ${this.nome}, ela tem ${this.idade} anos e seu cargo é ${this.cargo}</b>`;
    },

    set novoCargo (cargo) {
        this.cargo = cargo;
    },
}

containerGetter.innerHTML = `${objeto2.valorObjeto}`

inputSetter.addEventListener('input', () => {
    objeto2.novoCargo = inputSetter.value;
    containerGetter.innerHTML = `${objeto2.valorObjeto}`;
});

inputSetter.addEventListener('focusout', () => {
    if (inputSetter.value === "") {
        objeto2.novoCargo = "Estagiária";
        containerGetter.innerHTML = `${objeto2.valorObjeto}`;
    }
})
