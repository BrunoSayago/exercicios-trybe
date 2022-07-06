//aba configuracoes
const botaoConfiguracao = document.getElementById("configuracao");
botaoConfiguracao.addEventListener("click", abreAbaConfig);

const abaConfig = document.getElementById("aba-configuracao");

console.log(abaConfig.style.height)

function abreAbaConfig() {
    if (abaConfig.style.display === "none") {
        abaConfig.style.display = "block";
    } else {
        abaConfig.style.display = "none";
    }
}

let inputCorFundo = document.getElementById("seleciona-cor-fundo");
inputCorFundo.addEventListener("keyup", trocaFundoTela);

function trocaFundoTela(evento) {
    if (evento.key === 'Enter' && inputCorFundo.value.length > 0) {
        let textoRGB = inputCorFundo.value; 
        document.body.style.backgroundColor = textoRGB;
        localStorage.setItem('corDoFundo', textoRGB);
    }
}

let inputCorFonte = document.getElementById("seleciona-cor-fonte");
inputCorFonte.addEventListener("keyup", trocaCorFonte);

function trocaCorFonte(evento) {
    if (evento.key === 'Enter' && inputCorFonte.value.length > 0) {
        let textoRGB = inputCorFonte.value; 
        document.body.style.color = textoRGB;
        localStorage.setItem('corDaFonte', textoRGB);
    }
    
}



//botoes aumenta fonte

let botaoMaisFonte = document.getElementById("botao+fonte");
let botaoMenosFonte = document.getElementById("botao-fonte");
botaoMaisFonte.addEventListener("click", aumentaFonte);
botaoMenosFonte.addEventListener("click", diminuiFonte);
let listaTamanhos = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];

function aumentaFonte() {
    let tamanhoAtual = document.body.style.fontSize;
    let indexTamanhoAtual = listaTamanhos.indexOf(tamanhoAtual);
    let indexMaisTamanho = indexTamanhoAtual + 1;
    if (indexMaisTamanho > listaTamanhos.length - 1) {
        alert("Tamanho máximo");
    } else {
        let maisTamanho = listaTamanhos[indexMaisTamanho];
        document.body.style.fontSize = maisTamanho;
        localStorage.setItem('tamanhoDaFonte', maisTamanho)
    }
}

function diminuiFonte(evento) {
    let tamanhoAtual = document.body.style.fontSize;
    let indexTamanhoAtual = listaTamanhos.indexOf(tamanhoAtual);
    let indexMenosTamanho = indexTamanhoAtual - 1;
    if (indexMenosTamanho < 0) {
        alert("Tamanho mínimo");
    } else {
        document.body.style.fontSize = listaTamanhos[indexMenosTamanho];
        localStorage.setItem('tamanhoDaFonte', listaTamanhos[indexMenosTamanho])
    }
}


//Botoes aumenta linha

let botaoMaisLinha = document.getElementById("botao+linha");
let botaoMenosLinha = document.getElementById("botao-linha");
botaoMaisLinha.addEventListener("click", aumentaLinha);
botaoMenosLinha.addEventListener("click", diminuiLinha);
let listaTamanhosLinha = [0.75, 1.00, 1.25, 1.50, 1.75];

function aumentaLinha() {
    let tamanhoAtualLinha = parseFloat(document.body.style.lineHeight);
    let indexTamanhoAtualLinha = listaTamanhosLinha.indexOf(tamanhoAtualLinha);
    let indexMaisTamanhoLinha = indexTamanhoAtualLinha + 1;
    if (indexMaisTamanhoLinha > listaTamanhosLinha.length - 1) {
        alert("Tamanho máximo");
    } else {
        let maisTamanhoLinha = listaTamanhosLinha[indexMaisTamanhoLinha];
        let tamanhoDaLinhaString = maisTamanhoLinha + 'em';
        document.body.style.lineHeight = tamanhoDaLinhaString;
        localStorage.setItem('tamanhoDaLinha', tamanhoDaLinhaString)
    }
}


function diminuiLinha() {
    let tamanhoAtualLinha = parseFloat(document.body.style.lineHeight);
    let indexTamanhoAtualLinha = listaTamanhosLinha.indexOf(tamanhoAtualLinha);
    let indexMenosTamanhoLinha = indexTamanhoAtualLinha - 1;
    if (indexMenosTamanhoLinha < 0) {
        alert("Tamanho mínimo");
    } else {
        let menosTamanhoLinha = listaTamanhosLinha[indexMenosTamanhoLinha];
        let tamanhoDaLinhaString = menosTamanhoLinha + 'em';
        document.body.style.lineHeight = tamanhoDaLinhaString;
        localStorage.setItem('tamanhoDaLinha', tamanhoDaLinhaString)
    }
}

let botaoOpcao1 = document.getElementById("botao-opcao1");
let botaoOpcao2 = document.getElementById("botao-opcao2");
let botaoOpcao3 = document.getElementById("botao-opcao3");

botaoOpcao1.addEventListener("click", mudaFonte);
botaoOpcao2.addEventListener("click", mudaFonte);
botaoOpcao3.addEventListener("click", mudaFonte);

function mudaFonte(evento) {
    let fonteDaOpcao = evento.target.firstElementChild.innerText;
    let fonteAtual = document.body.style.fontFamily;
    if (fonteDaOpcao === fonteAtual) {
        alert("A opção já está aplicada.")
    } else {
        document.body.style.fontFamily = fonteDaOpcao
        localStorage.setItem('tipoDaFonte', fonteDaOpcao);
    }
}

function setCorDoFundo(stringe) {
    document.body.style.backgroundColor = stringe;
}

function setCorDaLetra(stringe) {
    document.body.style.color = stringe;
}

function setTamanhoFonte(stringe) {
    document.body.style.fontSize = stringe;
}

function setTamanhoLinha(stringe) {
    document.body.style.lineHeight = stringe;
}

function setTipoDaFonte(stringe) {
    document.body.style.fontFamily = stringe;
}

function initialRenderization() {
    if (localStorage.getItem('corDoFundo') !== null) {
        setCorDoFundo(localStorage.getItem('corDoFundo'));
    } 
    if (localStorage.getItem('corDaFonte') !== null) {
        setCorDaLetra(localStorage.getItem('corDaFonte'));
    }
    if (localStorage.getItem('tamanhoDaFonte') !== null) {
        setTamanhoFonte(localStorage.getItem('tamanhoDaFonte'));
    }
    if (localStorage.getItem('tamanhoDaLinha') !== null) {
        setTamanhoLinha(localStorage.getItem('tamanhoDaLinha'));
    }
    if (localStorage.getItem('tipoDaFonte') !== null) {
        setTipoDaFonte(localStorage.getItem('tipoDaFonte'));
    }   
}

window.onload = function() {
    initialRenderization();
  };



