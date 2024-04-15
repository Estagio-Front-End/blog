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

