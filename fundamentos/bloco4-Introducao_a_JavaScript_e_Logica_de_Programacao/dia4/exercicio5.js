// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
};

let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "Sim",
}

for (let index in info) {
    if (index == "recorrente") {
        if (info[index] == "Sim" && infoPatinhas[index] == "Não") {
            console.log(console.log(info[index] + " e " + infoPatinhas[index]))
        }
        else if (info[index] == "Não" && infoPatinhas[index] == "Sim") {
            console.log(console.log(info[index] + " e " + infoPatinhas[index]))
        }
        else if (info[index] == "Não" && infoPatinhas[index] == "Não") {
            console.log('Nenhum recorrente')
        }
        else {
            console.log('Ambos Recorrentes')
        }
    }
    else {
        console.log(info[index] + " e " + infoPatinhas[index])
    }
}


