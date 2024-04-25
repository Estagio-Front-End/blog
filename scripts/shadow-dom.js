//Criação da shadow DOM
const shadowHospedeiro = document.querySelector("#shadow-dom");
const shadowRaiz = shadowHospedeiro.attachShadow({mode:"open"});

const tituloShadow = document.createElement('h4');
const paragrafoShadow = document.createElement('p');
const botaoShadow = document.createElement('button');

shadowRaiz.appendChild(tituloShadow);
shadowRaiz.appendChild(paragrafoShadow);
shadowRaiz.appendChild(botaoShadow);

tituloShadow.textContent = "Este título está no shadow DOM";
paragrafoShadow.textContent = "Assim como este parágrafo";
botaoShadow.innerText = "Aumentar tamanho de fonte do parágrafo";

const botoesNoShadowDOM = Array.from(shadowHospedeiro.shadowRoot.querySelectorAll('button'));
const paragrafosNoShadowDOM = Array.from(shadowHospedeiro.shadowRoot.querySelectorAll('p'));

botoesNoShadowDOM.forEach(botao => botao.addEventListener('click', () => {  
  paragrafosNoShadowDOM.forEach(paragrafo => 
        {
          if (paragrafo.style.fontSize === "2rem") {
            paragrafo.style.fontSize = "1rem"; 
            botao.innerText = "Aumentar tamanho de fonte do parágrafo"
          } else {
            paragrafo.style.fontSize = "2rem"; 
            botao.innerText = "Diminuir tamanho de fonte do parágrafo";
          }
        })
}))

//CSS no Shadow DOM
let folhaDeEstilo = new CSSStyleSheet();
folhaDeEstilo.replaceSync("button { border: none; border-radius: 1rem; background-color: orange; padding: 1rem .5rem; cursor: pointer}")

shadowRaiz.adoptedStyleSheets = [folhaDeEstilo];

//Criação de tag customizada
class ComponenteCustomizado extends HTMLElement {
    constructor() {
      super();
    }
    
    

}