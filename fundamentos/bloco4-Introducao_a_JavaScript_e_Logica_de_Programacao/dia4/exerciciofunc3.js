//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function achaMenor(arrayInt) {
    let menor;
    for (let number of arrayInt) {
        if (menor == undefined) {
            menor = arrayInt.indexOf(number)
        }
        else if (menor > number) {
            menor = arrayInt.indexOf(number)
        }
    }
    return menor
}

let a = [2, 4, 6, 7, 10, 0, -3];
console.log(achaMenor(a))