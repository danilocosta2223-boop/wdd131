/* ==========================================
   Main Script - Templos Filtrados (S04)
   ========================================== */

// 1. Requisito: Usar import do array de templos (export default)
import temples from "./temples.js";

// Elemento contêiner principal da galeria
const container = document.querySelector("#temple-container");

// 2. Requisito: Função para criar os cartões de templos
function displayTemples(filteredTemples) {
    // Limpa o conteúdo anterior
    container.innerHTML = "";

    // Renderiza cada templo retornado pelo filtro
    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");

        // Requisito: h2 para título do card, lazy loading, alt text e atributos de dimensão
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString('en-US')} sq ft</p>
            <img 
                src="${temple.imageUrl}" 
                alt="${temple.templeName}" 
                loading="lazy" 
                width="400" 
                height="250"
            >
        `;

        container.appendChild(card);
    });
}

// Inicializa a exibição com todos os templos ao carregar a página
displayTemples(temples);

/* ==========================================
   3. Requisito: Filtros Dinâmicos
   ========================================== */

// Filtro: Home (Mostra todos os templos)
const homeFilter = document.querySelector("#home");
if (homeFilter) {
    homeFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(temples);
    });
}

// Filtro: Old (Construídos antes de 1900)
const oldFilter = document.querySelector("#old");
if (oldFilter) {
    oldFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(
            temples.filter(
                (temple) => Number(temple.dedicated.split(",")[0]) < 1900
            )
        );
    });
}

// Filtro: New (Construídos após 2000)
const newFilter = document.querySelector("#new");
if (newFilter) {
    newFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(
            temples.filter(
                (temple) => Number(temple.dedicated.split(",")[0]) > 2000
            )
        );
    });
}

// Filtro: Large (Área maior que 90.000 sq ft)
const largeFilter = document.querySelector("#large");
if (largeFilter) {
    largeFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(
            temples.filter((temple) => temple.area > 90000)
        );
    });
}

// Filtro: Small (Área menor que 10.000 sq ft)
const smallFilter = document.querySelector("#small");
if (smallFilter) {
    smallFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(
            temples.filter((temple) => temple.area < 10000)
        );
    });
}

/* ==========================================
   4. Requisito: Footer Dinâmico
   ========================================== */
const yearElement = document.querySelector("#year");
const modifElement = document.querySelector("#lastModified");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (modifElement) {
    modifElement.textContent = `Last Modification: ${document.lastModified}`;
}