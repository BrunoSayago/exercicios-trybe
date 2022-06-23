function achaPrimo(numero) {
    let primo = true;
    for (let numeroApoio = numero - 1; numeroApoio > 1; numeroApoio -= 1) {
        if (numero % numeroApoio == 0) {
            primo = false;
        } 
    }
    return primo;
}

let n = 7;

if (achaPrimo(n) == true) {
    console.log("É primo")
}
else {
    console.log("Não é primo")
}


