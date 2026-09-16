// ==========================================
// 1. Menu Hambúrguer (Mobile Navigation)
// ==========================================
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    // Garante o ícone inicial correto
    menuButton.textContent = "☰";

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");

        // Alterna o ícone do botão entre hambúrguer e 'X'
        if (navigation.classList.contains("open")) {
            menuButton.textContent = "✖";
        } else {
            menuButton.textContent = "☰";
        }
    });
}

// ==========================================
// 2. Rodapé Dinâmico (Ano e Modificação)
// ==========================================
const anoAtualEl = document.getElementById("anoatual");
const ultimaModificacaoEl = document.getElementById("ultimaModificacao");

if (anoAtualEl) {
    anoAtualEl.textContent = new Date().getFullYear();
}

if (ultimaModificacaoEl) {
    ultimaModificacaoEl.textContent = `Última Modificação: ${document.lastModified}`;
}