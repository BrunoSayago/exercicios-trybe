/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()

Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de 
como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)*/

document.getElementsByTagName("p")[0].innerText = "Eu me vejo sendo muito feliz, com emprego e salário estáveis.";

/*Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).*/

document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";

/*Crie uma função que mude a cor do quadrado vermelho para branco.*/

document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";

/*Crie uma função que corrija o texto da tag <h1>.*/

document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";

/*Crie uma função que modifique todo o texto da tag <p> para maiúsculo.*/

let paragrafos = document.getElementsByTagName("p");
for (let index = 0; index < paragrafos.length; index += 1) {
    paragrafos[index].style.textTransform = "uppercase";
}

/*Crie uma função que exiba o conteúdo de todas as tags <p> no console.*/
for (let index2 = 0; index2 < paragrafos.length; index2 += 1) {
    console.log(paragrafos[index2].innerText);
}