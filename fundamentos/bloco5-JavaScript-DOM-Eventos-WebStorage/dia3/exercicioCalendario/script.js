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

function criaTarefa(tarefa) {
    let task = document.createElement("span");
    let listaTarefa = document.getElementsByClassName("my-tasks")[0];
    listaTarefa.appendChild(task)
    task.innerText = tarefa;
}

criaTarefa("Projeto");

//Exercício 8:
//Implemente uma função que adicione uma legenda com cor para a tarefa.
//Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function legendaTarefa(cor) {
    let legenda = document.createElement("div");
    let listaTarefa = document.getElementsByClassName("my-tasks")[0];
    legenda.className = "task";
    legenda.style.backgroundColor = cor;
    listaTarefa.appendChild(legenda);
}

legendaTarefa("yellow");


//Exercício 9:
//Implemente uma função que selecione uma tarefa.
//Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

let legendas = document.getElementsByClassName("task");
for (let legenda of legendas) {
    legenda.addEventListener("click", selecionaTarefa) 
}

function selecionaTarefa(evento) {
    if (evento.target.classList.contains("selected")) {
        evento.target.classList.remove("selected");
    } else {
        evento.target.classList.add("selected");
    }
}


//Implemente uma função que atribua a cor da tarefa ao dia do calendário.
//Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
//Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)
for (let dia of dias) {
    dia.addEventListener("click", selecionaDia);
}

function selecionaDia(evento) {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    let corDoDia = evento.target.style.color;
    if (selectedTask.length > 0 && corDoDia !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; 
        evento.target.style.color = color;
    } else if (corDoDia === taskColor) {
        evento.target.style.color = 'rgb(119,119,119)';
    }
}

//Bônus:
//Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
//Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//Dica - Propriedade: key.

let botaoCompromisso = document.getElementById("btn-add");
botaoCompromisso.addEventListener("click", adicionaCompromisso);
let input = document.getElementById("task-input");
let listaCompromissos = document.getElementsByClassName("task-list")[0];

function adicionaCompromisso() {
    
    if (input.value == "") {
        alert("Erro: Nenhum compromisso adicionado.")
    } else {
        let compromisso = document.createElement("li");
        compromisso.innerText = input.value;
        listaCompromissos.appendChild(compromisso)
        input.value = "";
    }
}

input.addEventListener("keyup", adicionaCompromissoEnter);

function adicionaCompromissoEnter(evento) {
    if (evento.key === 'Enter' && input.value.length > 0) {
        let compromisso = document.createElement('li');
        compromisso.innerText = input.value;
        input.value = "";
        listaCompromissos.appendChild(compromisso);
    }
}



