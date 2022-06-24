let n = 9;
let nApoio = 0;
for (let index = 1; index <= Math.round((n/2)); index += 1) {
    let linhaApoio = "";
    if (index == Math.round((n/2))) {
        for (let index3 = 1; index3 <= n; index3 +=1) {
            linhaApoio = linhaApoio + "*";
        }
    }
    else {
        for (let index2 = 1; index2 <= n; index2 += 1) {
            if (index2 == Math.round((n/2)) + nApoio || index2 == Math.round((n/2)) - nApoio ) {
            linhaApoio = linhaApoio + "*"
            }
            else {
                linhaApoio = linhaApoio + " "
            }
        } 
    }
    console.log(linhaApoio)
    nApoio += 1
}