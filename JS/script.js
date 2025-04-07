let body = document.querySelector("body");
//Criei uma varável usando o let dei o nome de body , o
// body vai buscar no html cuso se chama document e vai usar um seletor que se chama queryselect e eles tem que
//  entender o que vai pegar , que é o meu body

let Camera = document.querySelector(".img-Camera");
//Criei uma nova varável usando o let dei o nome de iamgem , a imagemn
//  vai buscar no html cuso se chama document e vai usar um seletor que se chama queryselect e eles tem que
//  entender o que vai pegar , que é a imagem do tênis. porém existe uma diferença, caixa-img é o nome da classe
//  e por isso utiliza o ponto no começo , pois mão é uma tag html.

function mudarvisual(cor, imagem) {
  Camera.classList.add("troca-efeito");
  //adicionando uma classe do css no html pelo js

  body.style.background = cor;

  setTimeout(() => {
    Camera.src = imagem;
    //trocar imagem do tenis
    Camera.classList.remove("troca-efeito");
  }, 500);
  //lembrese , 1000 equivale a 1 segundo , pois, ele conta em milesegundo
  //Isso é um contador de tempo.
}
// criei uma função e dei o nome de mudar visual . entre parêntese dei um nome de cor ,
//  pq ele está pegando o conteúdo que está entre parênte no meu html com a função onclik ,
// utilizado para quando for clicar em algo. Com isso falei pra eles o que eles tem que fazer ,
//  pegar o meu body e mudar o estilo do background utilizando o nome cor que eu dei , respresanto
// a cor que está em cada botão no meu html. Logo em seguida adicionei a imagem , pois eu também quero que mude a minha imagem ,
// utilizei o src , pq é a tag onde minha imagem está, ela não ira mudar de outra tag , pois eu falei na variável em qual classe ela estava.
