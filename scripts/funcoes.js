function mediaAluno (nome, sobrenome, turma, ...notas) {
    var nomeAluno = nome;
    const turmaAluno = turma;

    function nomeCompleto (nome, sobrenome) {
        return `${nome} ${sobrenome}`
    }

    let media = notas.reduce((media, nota) => (nota/notas.length) + media, 0)
    return `A média de notas do(a) aluno(a) ${nomeCompleto(nomeAluno, sobrenome)} da turma ${turmaAluno} é: ${media}`
}

const nomeDemonstracao = document.getElementById("nome-demonstracao");
const sobrenomenomeDemonstracao = document.getElementById("sobrenome-demonstracao");
const turmaDemonstracao = document.getElementById("turma-demonstracao");
const nota1Demonstracao = document.getElementById("nota1-demonstracao");
const nota2Demonstracao = document.getElementById("nota2-demonstracao");
const nota3Demonstracao = document.getElementById("nota3-demonstracao");
const botaoDemonstracao = document.getElementById("botao-demonstracao");
const resultadoMedia = document.getElementById("resultado-media");

const inputsDemonstracao = document.querySelectorAll("[required]");

botaoDemonstracao.addEventListener('click', () => {
        let inputsVazios = 0;
        inputsDemonstracao.forEach((input) => {
            if (input.value !== "") {
                inputsVazios += 0;
            } else {
                inputsVazios += 1;
            }
            console.log(inputsVazios);
        });


        if (inputsVazios === 0) {
            resultadoMedia.innerText = mediaAluno(nomeDemonstracao.value, sobrenomenomeDemonstracao.value, turmaDemonstracao.value, nota1Demonstracao.value, nota2Demonstracao.value, nota3Demonstracao.value);
        } else {
            alert("Algum dos campos está vazio, tente novamente!")
            resultadoMedia.innerText = "";
        }   
})

//Funções assíncronas
const urlPokeAPI = "https://pokeapi.co/api/v2/pokemon";

function coletarImagemSylveon (url) {
    fetch(`${url}/sylveon`)
        .then(resposta => resposta.json())
        .then(dados => {
            document.getElementById("pokemon").setAttribute('src', dados.sprites.front_default);
            document.getElementById("pokemon").setAttribute('alt', `Imagem do pokemon ${dados.name}`);
        });
}

async function coletarImagemCharizard(url) {
    let resposta = await fetch(`${url}/charizard`);
    let dados = await resposta.json();
    document.getElementById("pokemon-2").setAttribute('src', dados.sprites.front_default);
    document.getElementById("pokemon-2").setAttribute('alt', `Imagem do pokemon ${dados.name}`);
}

coletarImagemSylveon(urlPokeAPI);
coletarImagemCharizard(urlPokeAPI);

//Recursividade
const inputRecursao = document.getElementById("numero-recursao");
const botaoRecursao = document.getElementById("botao-recursao")
const resultadoRecursao = document.getElementById("resultado-recursao");

function contagemRegressiva(tempoEmSegundos) {
    let contador = tempoEmSegundos;
    resultadoRecursao.innerText += ` ${contador}`; 
    setTimeout(() => {
        if (contador > 0) {
            contagemRegressiva(contador - 1)
        }
    }, 1000)
}

botaoRecursao.addEventListener('click', () => {
    resultadoRecursao.innerText = "";
    if ((inputRecursao.value !== "") && (inputRecursao.value > 0)) {
        contagemRegressiva(inputRecursao.value);
        inputRecursao.value = "";
    } else {
        alert("Indicar um número maior que zero para realizar a contagem regressiva!")
    }
})

