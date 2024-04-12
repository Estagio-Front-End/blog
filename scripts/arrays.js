//Definições de array
let arrayHomogeneo = JSON.stringify([1, 2, 3, 4, 5]);
let arrayHeterogeneo = JSON.stringify([1, true, "Camila", {nome: "Camila", idade: 29}, [6, 7, 8]]);

const checkboxArrayHomogeneo = document.getElementById("homogeneo");
const checkboxArrayHeterogeneo = document.getElementById("heterogeneo");
const resultadoArrays = document.getElementById("resultad-arrays");

const checkboxesArray = [checkboxArrayHomogeneo, checkboxArrayHeterogeneo];
checkboxesArray.forEach(checkbox => checkbox.addEventListener('click', mostraResultado));

function mostraResultado() {
    if (checkboxArrayHomogeneo.checked) {
        resultadoArrays.innerHTML = `<p class = "conteudo__texto">Arrays homogêneos são aqueles em que todos os dados possuem um mesmo tipo, como no array ${arrayHomogeneo}, em que todos os dados são do tipo <code>number</code>.</p>`
    } else if (checkboxArrayHeterogeneo.checked) {
        resultadoArrays.innerHTML = `<p class = "conteudo__texto">Arrays heterogêneos são aqueles em que seus dados possuem tipos diferentes, como no array ${arrayHeterogeneo}, em que os dados são de tipos diferentes, incluindo até um outro array como elemento.</p>.`
    } else {
        resultadoArrays.innerHTML = "";
    }
}

const exemploArrayObjetos = document.getElementById("array-objetos");
exemploArrayObjetos.innerText += ` ${JSON.stringify([{nome: "Camila", cargo: "Estagiária"},{nome: "Valéria", cargo: "Estagiária"},{nome: "Júlia", cargo: "Estagiária"}])}`;

//Métodos de busca
var arrayBusca = [1,2,3,4,5,6,7];
document.getElementById('array-busca').innerText += ` ${JSON.stringify(arrayBusca)}`;
const resultadoBusca = document.getElementById('resultado-busca');

function buscaArray(metodo) {
    var resultadoArrayBusca;
    switch (metodo) {
        case "find":
            resultadoArrayBusca = arrayBusca.find(x => x % 2 === 0);
            break;
        case "findindex":
            resultadoArrayBusca = arrayBusca.findIndex(x => x % 2 === 0);
            break;
        case "indexof":
            resultadoArrayBusca = arrayBusca.indexOf(5);
            break;
        case "some":
            resultadoArrayBusca = arrayBusca.some(x => x % 2 === 0);
            break;
        case "every":
            resultadoArrayBusca = arrayBusca.every(x => x % 2 === 0);
            break;
        case "includes":
            resultadoArrayBusca = arrayBusca.includes(10);
            break;
        default:
            resultadoBusca.innerText = '';
            break;
    }
    (metodo !== '') ? resultadoBusca.innerText = `O resultado da busca é: ${resultadoArrayBusca}` : resultadoBusca.innerText += '';
}

//Métodos de edição 
var arrayEdicao = [1,2,3,4,5,6,7];
document.getElementById('array-edicao').innerText += ` ${JSON.stringify(arrayEdicao)}`;
const resultadoEdicao = document.getElementById('resultado-edicao');

function editaArray(metodo) {
    switch (metodo) {
        case "foreach":
            resultadoEdicao.innerText = 'O resultado do método é:';
            arrayEdicao.forEach((numero, index) => resultadoEdicao.innerHTML += `<p>O número ${index+1} é ${numero};</p>`);   
            break;
        case "push":
            arrayEdicao.push(8,9);       
            break;
        case "pop":
            arrayEdicao.pop();     
            break;
        case "shift":
            arrayEdicao.shift();     
            break;
        case "unshift":
            arrayEdicao.unshift(8,9);    
            break;
        case "sort":
            arrayEdicao.sort();      
            break;
        case "fill":
            arrayEdicao.fill(10, 2, 4);     
            break;
        case "reverse":
            arrayEdicao.reverse();     
            break;
        case "splice":
            arrayEdicao.splice(0, 3, 25);   
            break;
        case "reduce":
            let resultadoReduce;
            resultadoReduce = arrayEdicao.reduce((acumulador, valor) => acumulador + valor, 0);
            resultadoEdicao.innerText = `O resultado do método é: ${resultadoReduce}`;    
            break;
        default:
            resultadoEdicao.innerText = "";   
            break;
    }

    (metodo !== '') ?
        (metodo !== "foreach" && metodo !== "reduce") 
        ? resultadoEdicao.innerText = `O resultado do método é: ${arrayEdicao}` 
        : resultadoEdicao.innerText += ''
        : resultadoEdicao.innerText += '';
}

//Métodos de criação
var arrayCriacao = [1,2,3,4,5,6,7];
document.getElementById('array-criacao').innerText += ` ${JSON.stringify(arrayCriacao)}`;
const resultadoCriacao = document.getElementById('resultado-criacao');

function criaArray(metodo) {
    var resultadoArrayCriacao;
    switch (metodo) {
        case "arrayfrom":
            resultadoArrayCriacao = Array.from("Camila");
            break;
        case "arrayof":
            resultadoArrayCriacao = Array.of(true, 29, "Estagiária");
            break;
        case "map":
            resultadoArrayCriacao = arrayCriacao.map(x => x*2);
            break;
        case "filter":
            resultadoArrayCriacao = arrayCriacao.filter(x => x % 2 === 0);
            break;
        case "join":
            resultadoArrayCriacao = arrayCriacao.join(", ");
            break;
        case "concat":
            resultadoArrayCriacao = arrayCriacao.concat([8,9,10]);
            break;
        case "flat":
            resultadoArrayCriacao = [1,2,3,4,[5,6,7]].flat();
            break;
        case "slice":
            resultadoArrayCriacao = arrayCriacao.slice(2,5);
            break;
        default:
            resultadoCriacao.innerText = '';
            break;
    }
    (metodo !== '') ? resultadoCriacao.innerText = `O resultado da busca é: ${JSON.stringify(resultadoArrayCriacao)}` : resultadoCriacao.innerText += '';
}