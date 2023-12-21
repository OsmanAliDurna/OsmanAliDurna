//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

const header = document.querySelector("header");

fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=435ab4a870014676bbda9501ffb47228").then((res) => {
    if (!res.ok) {
        throw new Error(`${res.status} hatası alıyorsunuz.`);
    }
    return res.json()
}).then((data) => {
    const p = document.createElement("p");
    header.appendChild(p);

    const name = document.createTextNode(data.articles[0].source.name);
    const author = document.createTextNode(data.articles[0].author);
    const title = document.createTextNode(data.articles[0].title);
    const description = document.createTextNode(data.articles[0].description);

    p.appendChild(name);
    p.innerHTML += "<br>";
    p.appendChild(author);
    p.innerHTML += "<br>";
    p.appendChild(title);
    p.innerHTML += "<br>";
    p.appendChild(description);
    p.innerHTML += "<br>";

}).catch((err) => console.log(err));