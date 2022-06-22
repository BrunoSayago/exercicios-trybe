let peca = "guerreiro";

switch (peca.toLowerCase()) {
    case "peão":
        console.log("Uma casa para frente. Ataca uma casa na diagonal (para frente)");
        break;

    case "torre":
        console.log("Horizontal e Vertical");
        break;
    
    case "bispo":
        console.log("Diagonais");
        break;
    
    case "cavalo":
        console.log("Em L");
        break;

    case "rainha":
        console.log("Todas Direções, quantas casas quiser");
        break;

    case "rei":
        console.log("Todas direções, só uma casa");
        break;

    default:
        console.log("Peça inválida");
}

