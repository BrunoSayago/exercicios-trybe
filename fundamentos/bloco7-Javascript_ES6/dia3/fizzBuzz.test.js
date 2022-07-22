const myFizzBuzz = require('./fizzBuzz.js');

describe('Testa a função FizzBuzz', () => {
    it('Deve retornar o resultado esperado', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
      expect(myFizzBuzz(6)).toBe('fizz');
      expect(myFizzBuzz(10)).toBe('buzz');
      expect(myFizzBuzz(4)).toEqual(4);
      expect(myFizzBuzz('falso')).toBeFalsy();
    });
});