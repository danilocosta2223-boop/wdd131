const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Garante que o botão comece com o ícone de hambúrguer
menuButton.textContent = "☰";

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

// Rodapé dinâmico
document.getElementById("anoatual").textContent = new Date().getFullYear();

document.getElementById("ultimaModificacao").textContent = `Última Modificação: ${document.lastModified}`;