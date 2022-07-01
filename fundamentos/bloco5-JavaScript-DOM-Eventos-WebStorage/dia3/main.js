const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

//POr causa da classe tech

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener("click", levantaCaixa);
secondLi.addEventListener("click", levantaCaixa);
thirdLi.addEventListener("click", levantaCaixa);


function levantaCaixa(elemento) {
  input.value = "";
  elemento.target.classList.add("tech")
  let listaDeItens = document.querySelectorAll("li")
  for (let itemDaLista = 0; itemDaLista <= listaDeItens.length; itemDaLista += 1) {
    if (listaDeItens[itemDaLista] !== elemento.target) { //&& listaDeItens[itemDaLista].classList.contains("tech")
      listaDeItens[itemDaLista].classList.remove("tech")
    }
    if (listaDeItens[itemDaLista] == elemento.target) {
      let index = itemDaLista
      switch (index) {
        case 0:
          input.placeholder = "Alterar a primeira tecnologia";
          break;
        case 1:
          input.placeholder = "Alterar a segunda tecnologia";
          break;
        case 2:
          input.placeholder = "Alterar a terceira tecnologia";
          break;
      }
    }
  }

}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


input.addEventListener("keyup", mudaTexto);

function mudaTexto() {
  document.querySelector(".tech").innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener("dblclick", linkPortfolio);

function linkPortfolio() {
  window.location.href = "https://brunosayago.github.io/";
}


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener("mouseover", mudaCor);
myWebpage.addEventListener("mouseleave", voltaCor);

function mudaCor(evento) {
  evento.target.style.color = "green";
}

function voltaCor(evento) {
  evento.target.style.color = "";
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.