// Crie duas funções JavaScript com as seguintes especificações:
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'

const substituiX = (nome) => {
    const frase = 'Tryber x aqui!'
    let novaFrase = frase.replace('x', nome);
    return novaFrase;
}

console.log(substituiX('Bebeto'));


// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

const funcao2 = (pam) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    return `${pam}
Minhas três principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}`
}

console.log(funcao2(substituiX('Bebeto')));
