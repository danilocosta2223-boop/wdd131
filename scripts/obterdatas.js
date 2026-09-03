// Atualiza o ano atual no rodapé
document.getElementById("anoatual").textContent = new Date().getFullYear();

// Atualiza a data da última modificação do documento no rodapé
document.getElementById("ultimaModificacao").textContent = `Última Modificação: ${document.lastModified}`;