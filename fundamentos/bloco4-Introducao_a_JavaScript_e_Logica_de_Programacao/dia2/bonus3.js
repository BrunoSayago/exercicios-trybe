let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let arrayNova = [];

for (let index = 0; index <= numbers.length - 1; index += 1) {
    let multiplicado;
    if (index == numbers.length - 1) {
        multiplicado = numbers[index] * 2
    } 
    else {
        multiplicado = numbers[index] * numbers[index + 1];
    }

    arrayNova.push(multiplicado)
}

console.log(arrayNova)