document.addEventListener("DOMContentLoaded", () => {
    // Obtém, incrementa e salva o número de avaliações enviadas
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    // Exibe o total no contador
    const counter = document.getElementById("reviewCount");
    if (counter) {
        counter.textContent = reviewCount;
    }

    // Atualiza dados dinâmicos do rodapé (Ano e Última Modificação)
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("lastModified");

    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Última Modificação: ${document.lastModified}`;
    }
});