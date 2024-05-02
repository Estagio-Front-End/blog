let itensComercio = [
  {
    nomeProduto: "Blusa feminina rosa",
    fotoProduto: "https://cdn.awsli.com.br/600x450/1398/1398809/produto/111209958/553b2a55bc.jpg",
    precoProduto: "R$29,99"
  }, 
  {
    nomeProduto: "Cropped feminina preta", 
    fotoProduto: "https://images.tcdn.com.br/img/img_prod/726059/mini_blusa_amarracao_preta_3051_1_9ce769a4f71534b1002722ba67d06ed3.jpg", 
    precoProduto: "R$19,99"
  }, 
  {
    nomeProduto: "Kit 5 blusas masculinas", 
    fotoProduto: "https://m.media-amazon.com/images/I/310+ZGN0owL._AC_SY1000_DpWeblab_.jpg", 
    precoProduto: "R$99,99"
  }, 
  {
    nomeProduto: "Sapato social preto",
    fotoProduto: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/kallucci/media/uploads/produtos/foto/b03134add9abe11200-box-pretto.JPG", 
    precoProduto: "R$249,99"
  }, 
  {
    nomeProduto: "Chinelo slider rosa", 
    fotoProduto: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/crshoesc/catalog/fotos-2022/chinela-rosa-2.jpeg", 
    precoProduto: "R$99,99"
  }, 
  {
    fotoProduto: "https://img.lojasrenner.com.br/item/552174914/large/3.jpg",
    nomeProduto: "Sandália bege", 
    precoProduto: "R$179,99"
  } 
]

let containerComercio = document.querySelector('#container-comercio')
itensComercio.forEach(item => {
  containerComercio.innerHTML += `
  <div class="conteudo__demonstracao__produto">
    <img src=${item.fotoProduto} alt=${item.nomeProduto}>
    <h4>${item.nomeProduto}</h4>
    <span>${item.precoProduto}</span>
    <button class="botao__carrinho">Adicionar ao carrinho</button>
  </div>`
})

let itensNoCarrinho = [];
let carrinhoNotificacao = document.querySelector('.carrinho__notificacao')

      let folhaEstiloCustomizado = new CSSStyleSheet();
      folhaEstiloCustomizado.replaceSync("*{font-family: 'Open Sans', sans-serif; font-size: 1.4rem} div {width: 200px; display: flex; flex-direction: column; flex-wrap: wrap; border: 1px solid lightgrey; gap: 1rem; padding: 1rem; border-radius: 2rem;} img {border-radius: 1rem; max-height: 80px;} h3 {font-size: 1.8rem; margin-bottom: 0;}")
      raiz.adoptedStyleSheets = [folhaEstiloCustomizado]

