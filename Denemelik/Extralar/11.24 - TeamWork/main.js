let count = 0;

const timerDisplay = document.querySelector(".timer-display");

let interval = 0;

const start = document.querySelector("#start-timer");
start.addEventListener("click", () => {
    interval = setInterval(() => {
        count++;
        let [millisecond, seconds, minutes] = [count % 100, Math.floor(count / 100), Math.floor(count / 6000)]
        timerDisplay.textContent = `${minutes.toString().padStart(2,0)}: ${seconds.toString().padStart(2,0)} : ${millisecond.toString().padStart(2,0)}`;
    }, 10);
})

const pause = document.querySelector("#pause-timer");
pause.addEventListener("click", () => {
    clearInterval(interval);
})

const reset = document.querySelector("#reset-timer");
reset.addEventListener("click", () => {
    location.reload()
})