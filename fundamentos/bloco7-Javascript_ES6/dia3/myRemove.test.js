const myRemove = require('./myRemove.js');

describe('Testa a função myRemove', () => {
    it('Deve retornar o array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
    it('Deve não retornar', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
  })