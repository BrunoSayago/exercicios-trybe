// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
// representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF 
// newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber 
// como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um 
// email no formato nome_da_pessoa@trybe.com.

const funcionario = (nomeCompleto) => {
    const nomeCompletoMinusculo = nomeCompleto.toLowerCase();
    const nomes = nomeCompletoMinusculo.split(' ');
    const idEmail = `${nomes[0]}_${nomes[nomes.length - 1]}`;
    const email = `${idEmail}@trybe.com`;
    return { nomeCompleto: nomeCompleto, email: email };
  } 

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra').nomeCompleto, 
      id2: func('Luiza Drumond').nomeCompleto, 
      id3: func('Carla Paiva').nomeCompleto,
    }
    return employees;
  };

console.log(newEmployees(funcionario));
