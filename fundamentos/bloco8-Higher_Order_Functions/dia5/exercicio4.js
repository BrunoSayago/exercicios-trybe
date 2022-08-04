// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas 
// australianas que nasceram no século 20:
// Dica: use object destructuring.

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo

  const filterPeople = (arrey) => {
    const filtrado = people.filter((obj) => {
        let { name, bornIn, nationality } = obj;
        if (bornIn < 2001 && bornIn >= 1901 && nationality === 'Australian') {
            return true;
        }
        return false;
    })
    return filtrado;
  }

  console.log(filterPeople(people));