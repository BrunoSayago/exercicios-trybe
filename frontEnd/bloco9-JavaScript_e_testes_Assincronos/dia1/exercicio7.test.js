const uppercase = require('./exercicio7');

test('Testando uppercase', (done) => {
    uppercase('Frase teste', (strUpperCase) => {
        try {
            expect(strUpperCase).toBe('FRASE TESTE');
            done();
        } catch (error) {
            done(error);
        }
    });
});