//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(sentence) {
    let palindromo = false;
    let sentenceInverted = "";
    for (let letter = sentence.length - 1; letter >= 0 ; letter -= 1) {
        sentenceInverted = sentenceInverted + sentence[letter];
    }
    if (sentenceInverted == sentence) {
        palindromo = true
    }
    return palindromo  
}

console.log(verificaPalindromo('arara') , verificaPalindromo('bruno'))