document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    // Preenche o select se o elemento e o array existirem
    if (productSelect && typeof products !== "undefined") {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
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