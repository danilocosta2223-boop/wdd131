// Função obrigatória com a fórmula exata do Wind Chill
function calcularSensacaoTermica(temp, vento) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(vento, 0.16) +
        0.3965 * temp * Math.pow(vento, 0.16)
    );
}

// Parâmetros estáticos do clima
const temperatura = 8;
const velocidadeVento = 10;

// Elemento da Sensação Térmica
const windchillElement = document.getElementById("windchill");

// Validação dos limites para exibição da sensação térmica
if (windchillElement) {
    if (temperatura <= 10 && velocidadeVento > 4.8) {
        windchillElement.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
    } else {
        windchillElement.textContent = "N/A";
    }
}

// Rodapé dinâmico: Ano atual e Última Modificação
const anoElement = document.getElementById("anoatual");
const modifElement = document.getElementById("ultimaModificacao");

if (anoElement) {
    anoElement.textContent = new Date().getFullYear();
}

if (modifElement) {
    modifElement.textContent = `Última Modificação: ${document.lastModified}`;
}