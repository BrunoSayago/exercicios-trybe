let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contaImpar = 0;

for (numero of numbers) {
    if (numero%2 !== 0) {
        contaImpar += 1
    }
}

if (contaImpar == 0) {
    console.log("nenhum valor ímpar encontrado")
}
else {
    console.log(contaImpar)
}
