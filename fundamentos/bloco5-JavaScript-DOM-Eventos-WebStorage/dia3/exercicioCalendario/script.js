function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  


//Exercício 1:
//Crie um calendário dinamicamente.
//O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
//Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
//A tag <ul> deve conter o id 'days';
//Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaMes(arrayDiasMes) {
    let lista = document.querySelector("#days");

    for (let dia of arrayDiasMes) {
        let itemDia = document.createElement("li");
        lista.appendChild(itemDia);
        itemDia.classList.add("day");
        itemDia.innerText = dia;
        if (dia == 24 || dia == 25 || dia == 31) {
            itemDia.classList.add("holiday");
        }
        if (dia == 4 || dia == 11 || dia == 18 || dia == 25) {
            itemDia.classList.add("friday");
        }
    } 
}

criaMes(decemberDaysList);

//Exercício 2:
//Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
//Sua função deve receber um parâmetro com a string 'Feriados'
//Adicione a este botão a ID "btn-holiday"
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container"


function makeButton(stringButton) {
    let button = document.createElement("button");
    let buttoncontainer = document.getElementsByClassName("buttons-container")[0];
    buttoncontainer.appendChild(button);
    if (stringButton == "Sexta-feira") {
        button.id = "btn-friday";
    }
    if (stringButton == "Feriados") {
        button.id = "btn-holiday";
    }
    button.innerText = stringButton;
}

makeButton("Feriados");


//Exercício 3:
//Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
//Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
//É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

let buttonHoliday = document.querySelector("#btn-holiday");
buttonHoliday.addEventListener("click", clicaFeriado);

function clicaFeriado() {
    let holidays = document.querySelectorAll(".holiday");
    for (let holiday of holidays) {
        if (holiday.classList.contains("marca-feriado")) {
            holiday.classList.remove("marca-feriado")
        } else {
            holiday.classList.add("marca-feriado")
        }
    }
}

//Exercício 4:
//Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
//Adicione a esse botão o ID "btn-friday";
//Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

makeButton("Sexta-feira");

//Exercício 5:
//Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
//É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

let buttonFriday = document.querySelector("#btn-friday");
buttonFriday.addEventListener("click", clicaSexta);

function clicaSexta() {
    let sextas = document.querySelectorAll(".friday");
    for (let sexta of sextas) {
        if (sexta.innerText != "Sextou !!") {
            sexta.innerText = "Sextou !!"
        } else {
            let proximoDia = sexta.nextElementSibling.innerText;
            sexta.innerText = parseInt(proximoDia) - 1; 
        }
    }
}


//Exercício 6:
//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//Dica - Propriedade: event.target.

let dias = document.querySelectorAll(".day");
for (let dia of dias) {
    dia.addEventListener("mouseover", daZoom);
    dia.addEventListener("mouseleave", tiraZoom);
}

function daZoom(day) {
    day.target.style.fontSize = "40px";
    day.target.style.fontWeight = "600";
}

function tiraZoom(day) {
    day.target.style.fontSize = "20px";
    day.target.style.fontWeight = "200";
}

//Exercício 7:
//Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"
