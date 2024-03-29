// Função 1
let numberInput: number = 7;

function isItAPrime(param: number): boolean {
  for (let i: number = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

// Função 2
// Essa função é responsável por validar se o formato do e-mail está correto.

let emailInput: string = 'email@email.com';

function validateEmailFormat(param: string): boolean {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))

// Função 3
const numberList: number[] = [10, 5, 18, 2, 8, 23];

function sortInput(param: number[]): number[] {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

// Função 4
// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
let peopleInput : { name: string, age: number } =  {
  name: 'Rui',
  age: 23,
};

function createSimpleSentence(param: { name: string, age: number }): string {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

// Função 5
// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
let ageInput: number = 15;

function isOfLegalAge(param: string | boolean): boolean {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));

