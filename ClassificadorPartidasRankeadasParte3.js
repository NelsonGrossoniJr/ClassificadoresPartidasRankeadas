function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    const limitesSuperiores = [10, 20, 50, 80, 90, 100, Infinity];
    const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

    for (let i = 0; i < limitesSuperiores.length; i++) {
        if (saldoVitorias <= limitesSuperiores[i]) {
            nivel = niveis[i];
            break;
        }
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplo de uso
const resultado = calcularNivel(80, 15);
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);