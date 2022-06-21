const salarioBruto = 3000;
let reduzINSS;
if (salarioBruto <= 1556.94) {
    reduzINSS = 0.92 * salarioBruto
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92 ) {
    reduzINSS = 0.91 * salarioBruto
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189,82) {
    reduzINSS = 0.89 * salarioBruto
}
else {
    reduzINSS = salarioBruto - 570.88
}

let salarioLiquido ;

if (reduzINSS > 4644.68) {
    salarioLiquido = reduzINSS - ((reduzINSS * 0.275)-869.36)
}
else if (reduzINSS >= 3751.06) {
    salarioLiquido = reduzINSS - ((reduzINSS * 0.225)-636.13)
}
else if (reduzINSS >= 2826.66) {
    salarioLiquido = reduzINSS - ((reduzINSS * 0.15)-354.80)
}
else if (reduzINSS >= 1903.99) {
    salarioLiquido = reduzINSS - ((reduzINSS * 0.075)-142.80)
}
else {
    salarioLiquido = reduzINSS
}

console.log(salarioLiquido)