//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
function verificaFinal(word , ending) {
    return word.endsWith(ending)
}

console.log(verificaFinal("trybe" , "be"))
console.log(verificaFinal("joaofernando" , "fernan"))