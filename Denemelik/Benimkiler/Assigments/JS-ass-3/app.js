const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

window.addEventListener("load", () => {
    const prms = new Promise((resolve, reject) => {
        setTimeout(() => {
            loadingDiv.remove();
            containerDiv.style.visibility = "visible";
        }, 3000);
        resolve(tarih);
    });

    prms.then((data) => interval(data)).then(() => fetchImages());
});

const interval = (obj) => {
    setInterval(() => {
        const trh = new Date();
        obj.innerText = `${trh.getDate()}.${trh.getMonth() + 1}.${trh.getFullYear()} ${trh.getHours().toString().padStart(2,"0")}:${trh.getMinutes().toString().padStart(2,"0")}:${trh.getSeconds().toString().padStart(2,"0")}`
    }, 1000);
}

btn.addEventListener("click", (e) => {
    const cocuk = e.target.parentElement.lastElementChild;
    Array(cocuk.childElementCount).fill(1).forEach((x) => cocuk.lastElementChild.remove())
    fetchImages();
})

const fetchImages = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((res) => {
        if (!res.ok) {
            throw new Error(`Hata: ${res.status}`);
        }
        return res.json()
    }).then((data) => show(data)).catch((err) => cardDiv.innerHTML += `<div id="loading" class="text-center" style="height: 100vh"> <img src="./img/error.gif" /></div>`);

    const show = (users) => {
        users.forEach(user => {
            cardDiv.innerHTML += `<div class="col-12 col-sm-6 col-lg-4"><div style="height:200px;"><img src="${user.url}" class = "w-100 h-100" alt = "..." > </div></div>`
        });
    }
}