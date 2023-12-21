//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")

let veri = "Merhaba";

fetch("https://api.github.com/users").then((res) => {
    if (!res.ok) {
        throw new Error(`Hata : ${res.status}`)
    }
    return res.json()
}).then((data) => show(data)).catch((err) => showError(err))

console.log(veri);

const show = (users) => {
    const userSection = document.getElementById("users");
    users.forEach(user => {
        userSection.innerHTML += `<h1>${user.login}</h1><img src ="${user.avatar_url}"/><p><a href="${user.html_url} target="_blank">${user.login} + github sayfasına gitmek için tıklayınız...</a></p>`
    });
}

const showError = (err) => {
    const userSection = document.getElementById("users");
    userSection.innerHTML += `<h1>${err}</h1><img src ="./img/404.png"/>`
}