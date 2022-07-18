// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.




const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const arrumaCrescente = (arrey) => {
    const novaArrey = arrey.sort(function(a, b){return a-b});
    let stringApoio = ''
    for (let index = 0; index < novaArrey.length; index += 1) {
        if (index === novaArrey.length - 1) {
            stringApoio = `${stringApoio}${novaArrey[index]}`
        } else {
            stringApoio = `${stringApoio}${novaArrey[index]},`
        }
    }
    const stringTemplate = `Os números ${stringApoio} se encontram ordenados de forma crescente!`
    console.log(stringTemplate)
}

arrumaCrescente(oddsAndEvens);

