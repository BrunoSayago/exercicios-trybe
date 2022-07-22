// 1 - Crie uma função que retorne a string 'Acordando!!';

const acorda = () => console.log('Acordando!!');

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';

const cafe = () => console.log('Bora tomar café!!');

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';

const dormir = () => console.log('Partiu dormir!!');

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

const doingThings = (func) => func();

doingThings(acorda);
doingThings(cafe);
doingThings(dormir);
