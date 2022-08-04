// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest.

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

console.log(sum(2, 5, 9, 10));
console.log(sum(2, 5));
console.log(sum(2));
console.log(sum(2, 5, 4, 2, 1, 9));