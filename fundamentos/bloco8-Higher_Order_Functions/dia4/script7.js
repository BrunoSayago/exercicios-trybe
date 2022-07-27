// 5- Dada o array de nomes, 
// retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const contaANaString = (palavra) => {
    let quantidadeA = 0;
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === 'a' || palavra[index] === 'A') {
        quantidadeA += 1;
      }
    }
    return quantidadeA;
  }

  const totalAsArray = names.reduce((acc, curr) => acc + contaANaString(curr), 0);
  return totalAsArray;
}

console.log(containsA());