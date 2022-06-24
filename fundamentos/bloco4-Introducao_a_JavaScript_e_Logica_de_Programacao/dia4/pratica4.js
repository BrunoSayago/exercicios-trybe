//Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
//Após refatorar o seu código, verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.

function soma(a, b) {
    return a+b
}

function subtracao(a, b) {
    return a-b
}

function subtracao(a, b) {
    return a-b
}

function multiplicacao(a, b) {
    return a*b
}

function divisao(a, b) {
    return a/b
}

function resto(a, b) {
    return a%b
}

let a = Math.floor(Math.random() * 10 + 1);
let b = Math.floor(Math.random() * 10 + 1);


console.log(a ,b);
console.log(soma(a,b));
console.log(subtracao(a,b));
console.log(multiplicacao(a,b));
console.log(divisao(a,b));
console.log(resto(a,b))
