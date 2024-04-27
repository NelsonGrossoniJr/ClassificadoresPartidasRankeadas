function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    switch (true) {
        case (saldoVitorias < 10):
            nivel = "Ferro";
            break;
        case (saldoVitorias <= 20):
            nivel = "Bronze";
            break;
        case (saldoVitorias <= 50):
            nivel = "Prata";
            break;
        case (saldoVitorias <= 80):
            nivel = "Ouro";
            break;
        case (saldoVitorias <= 90):
            nivel = "Diamante";
            break;
        case (saldoVitorias <= 100):
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplo de uso
const resultado = calcularNivel(60, 15);
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);