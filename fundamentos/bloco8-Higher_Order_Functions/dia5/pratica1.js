// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. 
// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, 
// faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas 
// usando o spread.



// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Limão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Ninho', 'Açúcar', 'Leite Condensado'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const saladaDeFruta = [...fruit, ...additional];
  return saladaDeFruta;
};

console.log(fruitSalad(specialFruit, additionalItens));