function achaPrimo(numero) {
    let primo = true;
    for (let numeroApoio = numero - 1; numeroApoio > 1; numeroApoio -= 1) {
        if (numero % numeroApoio == 0) {
            primo = false;
        } 
    }
    return primo;
}

let achou = false;
while (achou == false) {
    for (let index = 50; index >= 2; index -= 1) {
        if (achaPrimo(index) == true) {
            achou = true;
            console.log(index);
            break;
        } 
    }
}