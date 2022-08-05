const getPokemonDetails = require('./exercicio8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    getPokemonDetails('bruno', (error, _message) => {
        try {
            expect(error).toEqual(expectedError);
            done();
        } catch (error) {
            done(error);
        }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    const expectedString = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grama e a habilidade principal dele é Raio Solar';

    getPokemonDetails('Bulbasaur', (_error, message) => {
        try {
            expect(message).toEqual(expectedString);
            done();
        } catch (error) {
            done(error);
        }
    })
  });
});