//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome(arrayNome) {
    let biggerName;
    for (nome of arrayNome) {
        if (biggerName == undefined) {
            biggerName = nome
        }
        else if (biggerName.length < nome.length) {
            biggerName = nome
        }
    }
    return biggerName
}

let a = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(a))