import temples from "./temples.js";

document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.querySelector("#temple-container");
    const homeFilter = document.querySelector("#home");
    const oldFilter = document.querySelector("#old");
    const newFilter = document.querySelector("#new");
    const largeFilter = document.querySelector("#large");
    const smallFilter = document.querySelector("#small");

    // Exibe ano e última modificação no footer
    const currentYear = new Date().getFullYear();
    document.querySelector("#year").textContent = currentYear;
    document.querySelector("#lastModified").textContent =
        `Última Modificação: ${document.lastModified}`;

    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = "";

        filteredTemples.forEach((temple) => {
            const card = document.createElement("section");
            card.classList.add("temple-card");

            const name = document.createElement("h3");
            name.textContent = temple.templeName;

            const location = document.createElement("p");
            location.innerHTML =
                `<span class="label">Localização:</span> ${temple.location}`;

            const dedicated = document.createElement("p");
            dedicated.innerHTML =
                `<span class="label">Dedicação:</span> ${temple.dedicated}`;

            const area = document.createElement("p");
            area.innerHTML =
                `<span class="label">Área:</span> ${temple.area.toLocaleString("pt-BR")} sq ft`;

            const image = document.createElement("img");
            image.src = temple.imageUrl;
            image.alt = `Templo de ${temple.templeName}`;
            image.loading = "lazy";
            image.width = 400;
            image.height = 250;

            card.append(name, location, dedicated, area, image);
            templeContainer.appendChild(card);
        });
    }

    function getYear(dedicatedString) {
        return parseInt(dedicatedString.split(",")[0], 10);
    }

    homeFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(temples);
    });

    oldFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(
            temples.filter((temple) => getYear(temple.dedicated) < 1900)
        );
    });

    newFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(
            temples.filter((temple) => getYear(temple.dedicated) > 2000)
        );
    });

    largeFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(
            temples.filter((temple) => temple.area > 90000)
        );
    });

    smallFilter.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(
            temples.filter((temple) => temple.area < 10000)
        );
    });

    displayTemples(temples);
});