//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somaTotal(n) {
    let soma = 0;
    for (let index = 0; index <= n; index += 1) {
        soma += index
    }
    return soma
}

console.log(somaTotal(5))