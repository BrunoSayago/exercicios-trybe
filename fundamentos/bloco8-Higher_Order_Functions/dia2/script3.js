// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const primeiro = names.find((nome) => nome.length === 5)
  return primeiro;
}

console.log(findNameWithFiveLetters());