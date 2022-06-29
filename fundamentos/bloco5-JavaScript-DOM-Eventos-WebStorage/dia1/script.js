let cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor = "greenyellow";


let emergencia = document.getElementsByClassName("emergency-tasks")[0];
emergencia.style.backgroundColor = "pink";
let titulosEmergencia = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < titulosEmergencia.length; i += 1) {
    titulosEmergencia[i].style.backgroundColor = "darkorchid";
}

let naoEmergencia = document.getElementsByClassName("no-emergency-tasks")[0];
naoEmergencia.style.backgroundColor = "yellow";
let titulosNaoEmergencia = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < titulosNaoEmergencia.length; i += 1) {
    titulosNaoEmergencia[i].style.backgroundColor = "black";
}

let rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "seagreen";