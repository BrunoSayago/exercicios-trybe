// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function funcaoDoHREF(evento) {
    evento.preventDefault();
}

function funcaoDoCheckbox(evento) {
    evento.preventDefault();
}

function funcaoDoText(evento) {
    if (evento.key !== 'a') {
        evento.preventDefault(); 
    }
}


INPUT_TEXT.addEventListener('keypress', funcaoDoText)
INPUT_CHECKBOX.addEventListener('click', funcaoDoCheckbox)
HREF_LINK.addEventListener('click', funcaoDoHREF)