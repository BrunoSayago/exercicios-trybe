const botaoEnviar = document.getElementById('botao-enviar');
const botaoApagar = document.getElementById('botao-apagar');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const textArea = document.getElementById('espaco-resposta');
const data = document.getElementById('data');

function enviaForm(evento) {
  //evento.preventDefault();
}

botaoEnviar.addEventListener('click', enviaForm);
