//Acesse o elemento elementoOndeVoceEsta.

let elemento = document.getElementById("elementoOndeVoceEsta");

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

elemento.parentElement.style.color = "red";

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let firstSonOfSon = document.getElementById('primeiroFilhoDoFilho');

//Acesse o primeiroFilho a partir de pai.

let dad = document.getElementById("pai");
let firstSon = dad.firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

let firstSon2 = elemento.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let warning = elemento.nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let thirdSon = elemento.nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai.

let thirdSon2 = dad.firstElementChild.nextElementSibling.nextElementSibling;

//Crie um irmão para elementoOndeVoceEsta.

let brotherOfElement = document.createElement("section");
dad.appendChild(brotherOfElement);
brotherOfElement.innerText = "Irmão do Elemento";
brotherOfElement.id = "irmoDoElemento";

//Crie um filho para elementoOndeVoceEsta.

let sonOfElement = document.createElement("section");
elemento.appendChild(sonOfElement);
sonOfElement.innerHTML = "Filho do elemento";

//Crie um filho para primeiroFilhoDoFilho.

let sonOfFirstSonOfSon = document.createElement("section");
firstSonOfSon.appendChild(sonOfFirstSonOfSon);
sonOfFirstSonOfSon.innerText = "FIlho do primeiro filho do filho";

//A partir desse filho criado, acesse terceiroFilho.

let thirdSon3 = sonOfFirstSonOfSon.parentElement.parentElement.nextElementSibling;

//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let listaFIlhoDoPai = dad.childNodes;
console.log (listaFIlhoDoPai);

for (let index = listaFIlhoDoPai.length - 1; index >= 0; index -= 1) {
    const currentChildren = listaFIlhoDoPai[index];
    if (currentChildren.id !== "elementoOndeVoceEsta") {
        currentChildren.remove();
    }
}
console.log(dad.childNodes);

let listaFilhoElemento = elemento.childNodes;
for (let index2 = listaFilhoElemento.length - 1; index2 >= 0; index2 -= 1) {
    const currentChildrenOfElement = listaFilhoElemento[index2];
    if (currentChildrenOfElement.id !== "primeiroFilhoDoFilho") {
        currentChildrenOfElement.remove();
    }
}
console.log(elemento.childNodes)