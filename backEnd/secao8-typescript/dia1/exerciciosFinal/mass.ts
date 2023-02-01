// Crie um script para converter unidades de medida de massa:

// Esse script deverá se chamar mass.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

function convert(valor: number, unidadeBase: string, unidadeConvert: string): number {
    let medidas: string[] = ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg']
    let indexBase: number = medidas.indexOf(unidadeBase);
    let indexConvert: number = medidas.indexOf(unidadeConvert);
    if (indexBase < indexConvert) {
        return (valor * (10 ** (indexConvert - indexBase)))
    }
    return (valor / (10 ** (indexConvert - indexBase)))
}