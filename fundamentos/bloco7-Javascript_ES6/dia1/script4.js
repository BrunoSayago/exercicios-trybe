// Crie uma função que receba uma frase e retorne a maior palavra.

const maiorPalavra = (palavra) => {
    const arrey = palavra.split(' ');
    let maiorTamanho = 0;
    let maiorPalavra;
    for (let index = 0; index < arrey.length; index += 1) {
        if (arrey[index].length > maiorTamanho) {
            maiorPalavra = arrey[index];
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));