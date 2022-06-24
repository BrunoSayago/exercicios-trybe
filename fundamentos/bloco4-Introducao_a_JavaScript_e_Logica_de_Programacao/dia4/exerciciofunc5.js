//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete
function maisRepetido(arrayInt) {
    let indice = 0;
    let valorRepetido;
    for (numero of arrayInt) {
        if (arrayInt.filter(number => number == numero).length > indice) {
            indice = arrayInt.filter(number => number === numero).length;
            valorRepetido = numero
        }
    }
    return valorRepetido
}

let a = [2, 3, 2, 5, 8, 2, 3];
console.log(maisRepetido(a))
