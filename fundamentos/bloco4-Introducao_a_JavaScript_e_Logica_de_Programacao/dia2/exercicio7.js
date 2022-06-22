let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero;

for (numero of numbers) {
    if ((menorNumero) == undefined) {
        menorNumero = numero
    }
    else if (menorNumero > numero) {
        menorNumero = numero
    }
}

console.log(menorNumero)