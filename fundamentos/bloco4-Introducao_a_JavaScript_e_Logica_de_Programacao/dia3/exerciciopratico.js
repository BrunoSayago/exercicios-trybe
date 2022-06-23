// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:

//let sum = 0;
//for(let n = 1; n<=50; n +=1) {
//    sum = sum + n;
//}
//console.log("A soma total de 1 a 50 é: " + sum);



//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let sum = 0;
for(let n = 2; n<=150; n +=1) {
    if (n % 3 == 0) {
        sum +=1;
    } 
}
if (sum == 50) {
    console.log("mensagemsecreta")
}




// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "Pedra";
let player2 = "Papel";
if (player1 == "Pedra") {
    if (player2 == "Pedra") {
        console.log("A Ties")
    }
    if (player2 == "Tesoura") {
        console.log("Player 1 won")
    }
    if (player2 == "Papel") {
        console.log("Player 2 won")
    }
}

if (player1 == "Papel") {
    if (player2 == "Pedra") {
        console.log("Player 1 won")
    }
    if (player2 == "Tesoura") {
        console.log("Player 2 won")
    }
    if (player2 == "Papel") {
        console.log("A Ties")
    }
}

if (player1 == "Tesoura") {
    if (player2 == "Pedra") {
        console.log("Player 2 won")
    }
    if (player2 == "Tesoura") {
        console.log("A ties")
    }
    if (player2 == "Papel") {
        console.log("Player 1 won")
    }
}


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 20;
if (idade >= 18) {
    console.log("Maior de 18 anos")
}
else {
    console.log("Menor de 18 anos")
}


// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let carol = 90;
let murilo = 29;
let baeta = 67;

if (carol < murilo && carol < baeta) {
    console.log("Carol é a mais nova")
}
else if (murilo < carol && murilo < baeta) {
    console.log("Murilo é o mais novo")
}
else {
    console.log("Baeta é o mais novo")
}

    
