// Crie um script para converter unidades de medida de comprimento:

// Esse script deverá se chamar length.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

function convert(valor: number, unidadeBase: string, unidadeConvert: string): number {
    let medidas: string[] = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km']
    let indexBase: number = medidas.indexOf(unidadeBase);
    let indexConvert: number = medidas.indexOf(unidadeConvert);
    if (indexBase < indexConvert) {
        return (valor * (10 ** (indexConvert - indexBase)))
    }
    return (valor / (10 ** (indexConvert - indexBase)))
}