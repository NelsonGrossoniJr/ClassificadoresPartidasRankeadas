function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    const intervalos = [
        { limiteSuperior: 10, nivel: "Ferro" },
        { limiteSuperior: 20, nivel: "Bronze" },
        { limiteSuperior: 50, nivel: "Prata" },
        { limiteSuperior: 80, nivel: "Ouro" },
        { limiteSuperior: 90, nivel: "Diamante" },
        { limiteSuperior: 100, nivel: "Lendário" },
        { limiteSuperior: Infinity, nivel: "Imortal" }
    ];

    for (let i = 0; i < intervalos.length; i++) {
        if (saldoVitorias <= intervalos[i].limiteSuperior) {
            nivel = intervalos[i].nivel;
            break;
        }
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplo de uso
const resultado = calcularNivel(200, 15);
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);