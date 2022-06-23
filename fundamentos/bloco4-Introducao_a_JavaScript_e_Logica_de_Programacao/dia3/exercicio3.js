let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra;
let maiorPalavra;

//maior
for (palavra of array) {
    if (maiorPalavra == undefined) {
        maiorPalavra = palavra
    }
    else if (maiorPalavra.length < palavra.length) {
        maiorPalavra = palavra
    }
}

//menor
for (palavra of array) {
    if (menorPalavra == undefined) {
        menorPalavra = palavra
    }
    else if (menorPalavra.length > palavra.length) {
        menorPalavra = palavra
    }
}

console.log(menorPalavra , maiorPalavra)
