const watch = document.querySelector("main");
const stoped = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const time = document.querySelector("p");

const stopPushing = document.querySelector("footer");
const push = document.querySelector(".push");
const time2 = document.querySelector(".time2");
const dec = document.querySelector(".decleration");

let count = 0;
let allmsc = 0;
let playIt;

stoped.addEventListener("click", (e) => {

    if (e.target.textContent == "||") {
        e.target.textContent = "▶";
        stopIt();

    } else {
        e.target.textContent = "||";

        playIt = setInterval(() => {
            allmsc += 10;
            let min = ((Math.floor(allmsc / 60000) % 3600000) % 60).toString().padStart(2, "0");
            let sec = ((Math.floor(allmsc / 1000) % 60000) % 60).toString().padStart(2, "0");
            let msc = ((Math.floor(allmsc / 10) % 100)).toString().padStart(2, "0");
            time.textContent = `${min} : ${sec} : ${msc}`;
        }, 10);
    }
})

const stopIt = () => {
    clearInterval(playIt);
}

reset.addEventListener("click", () => {
    clearInterval(playIt);
    time.textContent = "00 : 00 : 00";
    count++;

    if (count == 3) {
        alert("Sıkılmadın mı ? Challenge a var mısın ?")
        stopPushing.style.visibility = "visible";
        watch.style.visibility = "hidden";
    }
});

push.addEventListener("mousedown", () => {
    playIt = setInterval(() => {
        allmsc += 10;
        let min = ((Math.floor(allmsc / 60000) % 3600000) % 60).toString().padStart(2, "0");
        let sec = ((Math.floor(allmsc / 1000) % 60000) % 60).toString().padStart(2, "0");
        let msc = ((Math.floor(allmsc / 10) % 100)).toString().padStart(2, "0");
        time2.textContent = `${min} : ${sec} : ${msc}`;
    }, 10);
})

const sec = Math.floor(Math.random() * 5).toString().padStart(2, "0");
const mili = Math.floor(Math.random() * 100).toString().padStart(2, "0");
dec.textContent = `Fare ile butona tıklayıp basılı tutarak tam ${sec} : ${mili} de durdurabilir misin ?`;

push.addEventListener("mouseup", () => {
    stopIt();
    time2.textContent == `00 : ${sec} : ${mili}` ? alert("Helal, helal +1 -1 milisaniyeden bişi olmaz.") : alert("Olmadı");
    time2.textContent = "00 : 00 : 00";
    allmsc = 0;
})