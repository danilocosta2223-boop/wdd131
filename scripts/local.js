// Requisito Explicito: Nome e formula exatos da funcao
function calcularSensacaoTermica(temp, vento) {
    return 13.12 + 0.6215 * temp - 11.37 * (vento ** 0.16) + 0.3965 * temp * (vento ** 0.16);
}

// Dados do clima
const temp = 8;
const vento = 10;

const windchillElement = document.getElementById("windchill");

// Requisito: Calcular apenas se temp <= 10 e vento > 4.8
if (windchillElement) {
    if (temp <= 10 && vento > 4.8) {
        windchillElement.textContent = `${calcularSensacaoTermica(temp, vento).toFixed(1)} °C`;
    } else {
        windchillElement.textContent = "N/A";
    }
}

// Requisito: Rodape dinamico com IDs corretos
const anoElement = document.getElementById("anoatual");
const modifElement = document.getElementById("ultimaModificacao");

if (anoElement) {
    anoElement.textContent = new Date().getFullYear();
}

if (modifElement) {
    modifElement.textContent = `Última Modificação: ${document.lastModified}`;
}