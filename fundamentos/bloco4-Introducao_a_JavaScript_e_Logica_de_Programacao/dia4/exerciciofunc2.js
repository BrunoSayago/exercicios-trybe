//Crie uma função que receba um array de inteiros e retorne o índice do maior valor
function achaMaior(arrayInt) {
    let maior;
    for (let number of arrayInt) {
        if (maior == undefined) {
            maior = arrayInt.indexOf(number)
        }
        else if (maior < number) {
            maior = arrayInt.indexOf(number)
        }
    }
    return maior
}

let a = [2 , 3 , 6 , 7 , 10 , 1];
console.log(achaMaior(a))