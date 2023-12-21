const searchInput = document.querySelector("#search");
const searchDiv = document.querySelector("#searchDiv");
const countries = document.querySelector(".countries");
const liList = document.querySelectorAll("li");
const spanList = Array.from(document.querySelectorAll("span")).slice(0, 10);

window.addEventListener("load", () => {
    searchDiv.style.visibility = "hidden";
    spanList.forEach((span) => span.textContent = "")
    starter("Turkey");
});

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    searchDiv.style.visibility = "visible";
    fetch(`https://restcountries.com/v3.1/all`).then((res) => res.json()).then((data) => data.map(d => d.name.common).sort()).then((names) => {
        spanList.forEach((span, index) => span.textContent = names.filter((country) => country.toLowerCase().includes(text))[index]);
        return spanList;
    }).catch((err) => {
        document.body.remove();
        document.write(err);
    });
})

searchDiv.addEventListener("click", (e) => {
    searchInput.value = "";
    searchInput.placeholder = e.target.textContent;
    starter(e.target.textContent);
    spanList.forEach((span) => span.textContent = "")
});

const starter = (nameOfCountry) => {
    fetch(`https://restcountries.com/v3.1/name/${nameOfCountry}`).then((res) => {
        if (!res.ok) {
            throw new Error(`Hata: ${res.status}`);
        }
        console.log(res);
        return res.json();
    }).then((data) => fill(data[0])).catch((err) => {
        document.body.remove();
        document.write(err);
    });
};

const fill = ({
    flags,
    name,
    continents,
    capital,
    languages,
    currencies,
    population,
    borders,
    maps: {
        googleMaps
    }
}) => {
    document.querySelector("img").src = flags.png;
    document.querySelector("h5").textContent = " " + name.common;
    liList[0].lastChild.textContent = " " + continents.join(", ");
    liList[1].lastChild.textContent = " " + capital;
    liList[2].lastChild.textContent = " " + Object.values(languages).join(", ");
    liList[3].lastChild.textContent = " " + Object.values(Object.values(currencies)[0]).join(", ");
    liList[4].lastChild.textContent = " " + format(population);
    liList[5].lastChild.textContent = " " + borders.join(", ");
    document.querySelector("a").href = googleMaps;
}

const format = num => {
    const n = String(num),
        p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
}