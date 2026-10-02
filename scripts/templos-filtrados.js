import temples from "./temples.js";

document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.querySelector("#temple-container");
    const homeFilter = document.querySelector("#home");
    const oldFilter = document.querySelector("#old");
    const newFilter = document.querySelector("#new");
    const largeFilter = document.querySelector("#large");
    const smallFilter = document.querySelector("#small");

    // Menu Hamburguer / Mobile Navigation
    const mainNav = document.querySelector(".navigation");
    const hambutton = document.querySelector("#menu");

    if (hambutton && mainNav) {
        hambutton.addEventListener("click", () => {
            mainNav.classList.toggle("show");
            hambutton.classList.toggle("show");
        });
    }

    // Exibe ano e última modificação no footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector("#year");
    const lastModifiedElement = document.querySelector("#lastModified");

    if (yearElement) yearElement.textContent = currentYear;
    if (lastModifiedElement) lastModifiedElement.textContent = `Última Modificação: ${document.lastModified}`;

    // Função para renderizar os cards de templos
    function displayTemples(filteredTemples) {
        if (!templeContainer) return;
        templeContainer.innerHTML = "";

        filteredTemples.forEach((temple) => {
            const card = document.createElement("section");
            card.classList.add("temple-card");

            const name = document.createElement("h3");
            name.textContent = temple.templeName;

            const location = document.createElement("p");
            location.innerHTML = `<span class="label">Localização:</span> ${temple.location}`;

            const dedicated = document.createElement("p");
            dedicated.innerHTML = `<span class="label">Dedicação:</span> ${temple.dedicated}`;

            const area = document.createElement("p");
            area.innerHTML = `<span class="label">Área:</span> ${temple.area.toLocaleString("pt-BR")} sq ft`;

            const image = document.createElement("img");
            image.src = temple.imageUrl;
            image.alt = `Templo de ${temple.templeName}`;
            image.loading = "lazy";
            image.width = 400;
            image.height = 250;

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(image);

            templeContainer.appendChild(card);
        });
    }

    // Função auxiliar para extrair o ano de dedicação
    function getYear(dedicatedString) {
        const parts = dedicatedString.split(",");
        return parseInt(parts[0].trim(), 10);
    }

    // Eventos de Filtro
    if (homeFilter) {
        homeFilter.addEventListener("click", (e) => {
            e.preventDefault();
            displayTemples(temples);
        });
    }

    if (oldFilter) {
        oldFilter.addEventListener("click", (e) => {
            e.preventDefault();
            const oldTemples = temples.filter((temple) => getYear(temple.dedicated) < 1900);
            displayTemples(oldTemples);
        });
    }

    if (newFilter) {
        newFilter.addEventListener("click", (e) => {
            e.preventDefault();
            const newTemples = temples.filter((temple) => getYear(temple.dedicated) > 2000);
            displayTemples(newTemples);
        });
    }

    if (largeFilter) {
        largeFilter.addEventListener("click", (e) => {
            e.preventDefault();
            const largeTemples = temples.filter((temple) => temple.area > 90000);
            displayTemples(largeTemples);
        });
    }

    if (smallFilter) {
        smallFilter.addEventListener("click", (e) => {
            e.preventDefault();
            const smallTemples = temples.filter((temple) => temple.area < 10000);
            displayTemples(smallTemples);
        });
    }

    // Renderização inicial
    displayTemples(temples);
});