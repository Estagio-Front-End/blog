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

//Métodos de edição 
var arrayInicial = [1,2,3,4,5,6,7];
document.getElementById('array-inicial').innerText += ` ${JSON.stringify(arrayInicial)}`;
const resultadoBusca = document.getElementById('resultado-edicao');

function buscaArray(metodo) {
    var resultado;
    switch (metodo) {
        case "foreach":
            resultadoBusca.innerText = 'O resultado do método é:';
            arrayInicial.forEach((numero, index) => resultadoBusca.innerHTML += `<p>O número ${index+1} é ${numero}; </p>`);   
            break;
        case "push":
            resultado = arrayInicial.push(8,9);
            resultadoBusca.innerText = `O resultado do método é: ${arrayInicial}`;    
            break;
        case "pop":
            resultado = arrayInicial.pop();
            resultadoBusca.innerText = `O resultado do método é: ${arrayInicial}`;    
            break;
        case "shift":
            resultado = arrayInicial.shift();
            resultadoBusca.innerText = `O resultado do método é: ${arrayInicial}`;    
            break;
        case "unshift":
            resultado = arrayInicial.unshift(8,9);
            resultadoBusca.innerText = `O resultado do método é: ${arrayInicial}`;    
            break;
        case "sort":
            resultado = arrayInicial.sort();
            resultadoBusca.innerText = `O resultado do método é: ${arrayInicial}`;    
            break;
        case "fill":
            resultado = arrayInicial.fill(10, 2, 4);
            resultadoBusca.innerText = `O resultado do método é: ${arrayInicial}`;    
            break;
        case "reverse":
            resultado = arrayInicial.reverse();
            resultadoBusca.innerText = `O resultado do método é: ${arrayInicial}`;    
            break;
        case "splice":
            resultado = arrayInicial.splice(0, 3, 25);
            resultadoBusca.innerText = `O resultado do método é: ${arrayInicial}`;    
            break;
        case "reduce":
            resultado = arrayInicial.reduce((acumulador, valor) => acumulador + valor, 0);
            resultadoBusca.innerText = `O resultado do método é: ${resultado}`;    
            break;
        default:
            resultadoBusca.innerText = "";   
            break;
    }
}