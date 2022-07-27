const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPar = (par1, par2) => {
    if (par1 % 2 === 0 && par2 % 2 === 0) {
        return par1 + par2;
    } else {
        return par1;
    }
}

const somaDosPares = numbers.reduce(somaPar, 0);
console.log(somaDosPares);