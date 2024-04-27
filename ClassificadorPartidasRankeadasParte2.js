function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    const niveis = {
        "Ferro": { min: -Infinity, max: 10 },
        "Bronze": { min: 11, max: 20 },
        "Prata": { min: 21, max: 50 },
        "Ouro": { min: 51, max: 80 },
        "Diamante": { min: 81, max: 90 },
        "Lendário": { min: 91, max: 100 },
        "Imortal": { min: 101, max: Infinity }
    };

    for (let key in niveis) {
        const faixa = niveis[key];
        if (saldoVitorias >= faixa.min && saldoVitorias <= faixa.max) {
            nivel = key;
            break;
        }
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplo de uso
const resultado = calcularNivel(100, 90);
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);