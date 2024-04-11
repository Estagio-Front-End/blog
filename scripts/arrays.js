let arrayHomogeneo = JSON.stringify([1, 2, 3, 4, 5]);
let arrayHeterogeneo = JSON.stringify([1, true, "Camila", {nome: "Camila", idade: 29}, [6, 7, 8]]);

let arr = [1, 2, 3, 4, 5]
arr.fill(10, 2, 4);
console.log(arr);

const checkboxArrayHomogeneo = document.getElementById("homogeneo");
const checkboxArrayHeterogeneo = document.getElementById("heterogeneo");
const resultadoArrays = document.getElementById("resultad-arrays");

const checkboxesArray = [checkboxArrayHomogeneo, checkboxArrayHeterogeneo];
checkboxesArray.forEach(checkbox => checkbox.addEventListener('click', mostraResultado));

function mostraResultado() {
    if (checkboxArrayHomogeneo.checked) {
        resultadoArrays.innerHTML = `<p class = "conteudo__texto">Arrays homogêneos são aqueles em que todos os dados possuem um mesmo tipo, como no array ${arrayHomogeneo}, em que todos os dados são do tipo <code>number</code></p>.`
    } else if (checkboxArrayHeterogeneo.checked) {
        resultadoArrays.innerHTML = `<p class = "conteudo__texto">Arrays heterogêneos são aqueles em que seus dados possuem tipos diferentes, como no array ${arrayHeterogeneo}, em que os dados são de tipos diferentes, incluindo até um outro array como elemento.</p>.`
    } else {
        resultadoArrays.innerHTML = "";
    }
}

const exemploArrayObjetos = document.getElementById("array-objetos");
exemploArrayObjetos.innerText += ` ${JSON.stringify([{nome: "Camila", cargo: "Estagiária"},{nome: "Valéria", cargo: "Estagiária"},{nome: "Júlia", cargo: "Estagiária"}])}`;
