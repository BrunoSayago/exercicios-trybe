const a = 180;
const b = 20;
const c = -20;

if (a < 1 || b < 1 || c < 1) {
    console.log("Valor de ângulo inválido")
}
else if ((a+b+c) == 180) {
    console.log(true)
}
else {
    console.log(false)
}