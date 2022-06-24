let n = 5;
let nApoio = n;
for (let index = 1; index <= n; index += 1) {
    let linhaApoio = "";
    for (let index2 = 1; index2 <= n; index2 += 1) {
        if (index2 >= nApoio) {
            linhaApoio = linhaApoio + "*";
        }
        else {
            linhaApoio = linhaApoio + " "
        }   
    }
    console.log(linhaApoio)
    nApoio -= 1
}