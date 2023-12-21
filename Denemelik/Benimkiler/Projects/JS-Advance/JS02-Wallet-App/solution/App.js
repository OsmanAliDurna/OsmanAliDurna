const kaydet = document.querySelector(".kaydet");
const tarih = document.querySelector(".tarih");
const miktar = document.querySelector(".miktar");
const harcamaAlanı = document.querySelector(".harcamaAlanı");
const harcamalarTablosu = document.querySelector(".harcamalarTablosu");
const gelir = document.querySelector(".gelir");
const gelirEkle = document.querySelector(".ekle");
const geliriniz = document.querySelector(".gelirBilgisi");
const gideriniz = document.querySelector(".giderBilgisi");
const kalan = document.querySelector(".kalanBilgisi");
const reset = document.querySelector(".reset");
const sil = document.querySelector(".sil");

kaydet.addEventListener("click", () => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("button");
    const text = document.createTextNode(tarih.value || "1.1.2023");
    const text2 = document.createTextNode(harcamaAlanı.value || "Diğer");
    const text3 = document.createTextNode(miktar.value || "0");
    const text4 = document.createTextNode("🗑");
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    td.appendChild(text);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    harcamalarTablosu.appendChild(tr);

    td4.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        text3.textContent *= -1;
        hesapla(e.target.parentNode)
    })

    hesapla(tr);

    tarih.value = "";
    miktar.value = "";
    harcamaAlanı.value = "";
})

const hesapla = (satır) => {
    gideriniz.textContent = Number(gideriniz.textContent) + Number(satır.lastElementChild.previousElementSibling.textContent)
    kalan.textContent = geliriniz.textContent - gideriniz.textContent;
}

gelirEkle.addEventListener("click", () => {
    geliriniz.textContent = Number(gelir.value) || 5000;
    kalan.textContent = Number(gelir.value) || 5000;
    gelir.value = "";
})

reset.addEventListener("click", () => location.reload())