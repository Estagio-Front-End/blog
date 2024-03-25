//Variáveis
const botaoVar = document.querySelector("#var");
const botaoLet = document.getElementById("let");
const botaoConst = document.getElementById("const");
const exibeResultadoVariaveis = document.querySelector("#resultado-variaveis"); 


const listaBotoes = [botaoLet, botaoVar, botaoConst];

listaBotoes.forEach(botao => {
    botao.addEventListener('click', mostraResultado);
});

function mostraResultado() {
    if (botaoVar.checked) {
        var var1 = "Esta é uma variável declarada com var";
        
        exibeResultadoVariaveis.innerHTML = `<p class="conteudo__texto">A forma de se declarar uma variável com <code>var</code> é: <code>var nome_variavel</code>. A atribuição de valor pode ser feita na hora da declaração com o sinal de atribuição (<code>=</code>) ou em outra linha de código, da seguinte forma: <code>nome_variavel = valor_variavel</code>, sendo esse valor arbitrário. Para utilizar esta variável, é necessário apenas utilizar o nome declarado na operação que irá ser realizada. Uma variável chamada var1 foi declarada nesta página utilizando a palavra reservada var e o valor desta variável é: <b>${var1}</b>.</p>`;
        
        var1 = "A variável var1 foi alterada";
        
        exibeResultadoVariaveis.innerHTML += `<p class="conteudo__texto">Para alterar o valor de uma variável já declarada, é só lhe atribuir um novo valor como em <code>nome_variavel = novo_valor</code>. A variável var1 foi alterada e seu novo valor é: <b>${var1}</b>.</p>`

    } else if (botaoLet.checked) {
        let var2 = "Esta é uma variável declarada com let";
        
        exibeResultadoVariaveis.innerHTML = `<p class="conteudo__texto">A forma de se declarar uma variável com <code>let</code> é: <code>let nome_variavel</code>. A atribuição de valor pode ser feita na hora da declaração com o sinal de atribuição (<code>=</code>) ou em outra linha de código, da seguinte forma: <code>nome_variavel = valor_variavel</code>, sendo esse valor arbitrário. Para utilizar esta variável, é necessário apenas utilizar o nome declarado na operação que irá ser realizada. Uma variável chamada var2 foi declarada nesta página utilizando a palavra reservada let e o valor desta variável é: <b>${var2}</b>.</p>`

        var2 = "A variável var2 foi alterada";
        
        exibeResultadoVariaveis.innerHTML += `<p class="conteudo__texto">Para alterar o valor de uma variável já declarada, é só lhe atribuir um novo valor como em <code>nome_variavel = novo_valor</code>. A variável var2 foi alterada e seu novo valor é: <b>${var2}</b>.</p>`
    } else if (botaoConst.checked) {
        
        const var3 = "Esta é uma variável declarada com const";

        exibeResultadoVariaveis.innerHTML = `<p class="conteudo__texto">A forma de se declarar uma variável com <code>const</code> é: <code>const nome_variavel</code>. A atribuição de valor pode ser feita na hora da declaração com o sinal de atribuição (<code>=</code>) ou em outra linha de código, da seguinte forma: <code>nome_variavel = valor_variavel</code>, sendo esse valor arbitrário. Para utilizar esta variável, é necessário apenas utilizar o nome declarado na operação que irá ser realizada. Uma variável chamada var3 foi declarada nesta página utilizando a palavra reservada const e o valor desta variável é: <b>${var3}</b>.</p>`
        
        exibeResultadoVariaveis.innerHTML += `<p class="conteudo__texto">Visto que a palavra reservada code>const</code> representa valores constantes, não é possível alterar valores declarados desta forma. Qualquer tentativa disto gerará um erro de <i>Assignment to constant variable</i>, ou seja, atribuição à variável constante.</p>`

    } else {
        exibeResultadoVariaveis.innerHTML = ""
    }
}

//Tipos de dados
const exibeResultadoTiposDeDados = document.querySelector("#resultado-tiposDeDados");
let tipoVar;
let exemploVar1;
let exemploVar2;
let exemploVar3; 

function testeTipo(value) {
    switch (value) {
        case "number":
            tipoVar = "number";
            exemploVar1 = 3.14;
            exemploVar2 = 10e3; 
            exemploVar3 = 29;
            
            exibeResultadoTiposDeDados.innerHTML = `<p class="conteudo__texto">O tipo number se refere aos números, sejam eles inteiros, decimais ou exponenciais. Para números decimais utiliza-se o ponto (<code>.</code>) como separador das casas decimais e, em números exponenciais, o (<code>e</code>) como indicativo de exponencial de base 10. Exemplos do tipo ${tipoVar} são <code>${exemploVar1}</code>, <code>${exemploVar2}</code> (escrito em código como 10e3) e <code>${exemploVar3}</code>. Para números negativos, é só adicionar o sinal de negativo (<code>-</code>) antes do número como em <code>-${exemploVar1}</code>, <code>-${exemploVar2}</code> (escrito em código como -10e3) e <code>-${exemploVar3}</code>.</p>`;
            break;
        case "string":
            tipoVar = "string";
            exemploVar1 = "Palavra";
            exemploVar2 = "Uma frase completa"; 
            
            exibeResultadoTiposDeDados.innerHTML = `<p class="conteudo__texto">Strings são conjuntos de textos. Para criar uma string, 3 formas podem ser utilizadas: aspas simples (<code>''</code>), aspas duplas (<code>""</code>) ou crases (<code>``</code>). Esta última bastante utilizada para criar as chamadas template strings, em que texto e variáveis podem ser escritos sem necessidade de operadores de concatenação. É importante notar que, caso seja necessário utilizar aspas como um elemento textual dentro de uma string, as aspas utilizadas dentro do texto devem ser de um tipo diferente das utilizadas para criar a string. Exemplos do tipo ${tipoVar} são <code>${exemploVar1}</code> e <code>${exemploVar2}</code>.</p>`;
            break;
        case "array":
            tipoVar = "array";
            exemploVar1 = [1, 2, 3];
            exemploVar2 = ["Um", "Array", "de", "strings"]; 
            
            exibeResultadoTiposDeDados.innerHTML = `<p class="conteudo__texto">O array é uma estrutura muito utilizada para listagem de valores. Sua sintaxe inicia com colchete duplo (<code>[]</code>), onde serão inseridos os valores a serem listados, separados por vírgula (<code>,</code>). Para acessar o valor de um array, é necessário indicar seu índice entre colchetes ao lado do nome do array. Índices em programação iniciam em 0, desta forma, <code>lista[0]</code> será o primeiro valor de um array chamado lista. Exemplos do tipo ${tipoVar} são <code>${exemploVar1}</code> e <code>${exemploVar2}</code>.</p>`;
            break;
        case "boolean":
            tipoVar = "boolean";
            exemploVar1 = true;
            exemploVar2 = false; 
            
            exibeResultadoTiposDeDados.innerHTML = `<p class="conteudo__texto">O tipo ${tipoVar} representa valores do tipo verdadeiro ou falso e possui apenas 2 palavras reservadas como exemplos, que são as palavras <code>${exemploVar1}</code>, para verdadeiro e <code>${exemploVar2}</code>, para falso.</p>`;
            break;
        case "object":
            tipoVar = "object";
            exemploVar1 = { nome: "Camila", idade: 29, cargo: "Estagiária"};
            
            exibeResultadoTiposDeDados.innerHTML = `<p class="conteudo__texto">Tudo em Javascript é considerado um objeto, porém, quando se fala de objeto, é comum pensar na estrutura de propriedade/valor. Nesta estrutura, o objeto é inicializado com um par de chaves (<code>{}</code>), onde serão inseridos os pares propriedade/valor com a sintaxe <code>propriedade: valor,</code>. As vírgula no final da linha é obrigatória caso haja mais propriedades a serem relacionadas dentro do par de chaves. Um exemplos do tipo ${tipoVar} deste tipo é <code>${JSON.stringify(exemploVar1)}</code>.</p>`;
            break; 
        case "null":         
            exibeResultadoTiposDeDados.innerHTML = `<p class="conteudo__texto">O tipo <code>null</code> se refere à ausência de valor. Por exemplo, se tentamos acessar um elemento no document (árvore do HTML) que não existe por meio da função <code>querySelector</code>, teremos <b>${document.querySelector("#inexistente")}</b>.</p>`;
            break;
        case "undefined":
            let exemploVar4;
            
            exibeResultadoTiposDeDados.innerHTML = `<p class="conteudo__texto">O tipo <code>undefined</code> surge quando uma variável é declarada, não atribuída, e seu valor é acessado. Por exemplo, se declaramos uma variável com <code>let var4</code> e tentamos acessar seu conteúdo, teremos <b>${exemploVar4}</b>.</p>`;
            break;
        default: 
            exibeResultadoTiposDeDados.innerHTML = "";
    } 
}

//Operações
const inputNumber1 = document.querySelector("#numero1-operacoes");
const inputNumber2 = document.querySelector("#numero2-operacoes");
const selectOperacoesAritmeticas = document.querySelector("#operacoes-aritmeticas");
const exibeResultadoOperacoesNumber = document.querySelector("#resultado-operacoes-number");

