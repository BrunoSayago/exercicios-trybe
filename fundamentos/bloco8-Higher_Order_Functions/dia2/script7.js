// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people.sort((a, b) => {
    let idadeObjA = a.age;
    let idadeObjB = b.age;
    return idadeObjA - idadeObjB;
  })
  
  console.log(people);


//   2 - Modifique o sort do exercício anterior para que 
//   ordene o array pela idade das pessoas em ordem decrescente.


people.sort((a, b) => {
    let idadeObjA = a.age;
    let idadeObjB = b.age;
    return idadeObjB - idadeObjA;
  })
  
  console.log(people);
