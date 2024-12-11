const focus = document.getElementById("focus");
const long = document.getElementById("long");
const short = document.getElementById("short");
const start = document.getElementById("start");

const actions = document.querySelector(".actions");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const play = document.getElementById("play");


let minutes = document.getElementById("minutes");
let secondes = document.getElementById("secondes");

let m;
let s;


focus.addEventListener('click', () => {
    long.classList.remove("active");
    short.classList.remove("active");
    focus.classList.add("active");
    m = 25;
    s = 0;
    minutes.innerHTML = `${m}`;
    secondes.innerHTML = "0" + `${s}`;
})

long.addEventListener('click', () => {
    focus.classList.remove("active");
    short.classList.remove("active");
    long.classList.add("active");
    m = 15;
    s = 0;
    minutes.innerHTML = `${m}`;
    secondes.innerHTML = "0" + `${s}`;
})

short.addEventListener('click', () => {
    focus.classList.remove("active");
    long.classList.remove("active");
    short.classList.add("active");
    m = 5;
    s = 0;
    minutes.innerHTML = `${m}`;
    secondes.innerHTML = "0" + `${s}`;
})

start.addEventListener('click', () => {
    start.style.display = "none";
    actions.style.display = "block";
    timerInterval = setInterval(timer, 1000);
})

pause.addEventListener("click", () => {
    clearInterval(timerInterval);
})

play.addEventListener("click", () => {
    timerInterval = setInterval(timer, 1000);
})

reset.addEventListener("click", () => {
    clearInterval(timerInterval);
    if(short.classList.contains("active")){
        m = 5;
        s = 0;
        minutes.innerHTML = `${m}`;
        secondes.innerHTML = "0" + `${s}`;
    } else if(long.classList.contains("active")){
        m = 15;
        s = 0;
        minutes.innerHTML = `${m}`;
        secondes.innerHTML = "0" + `${s}`;
    } else {
        m = 25;
        s = 0;
        minutes.innerHTML = `${m}`;
        secondes.innerHTML = "0" + `${s}`;
    }
})


function timer(){
    if((m==25 || m==15 || m==5) && s==0 &&minutes.innerHTML == `${m}` && secondes.innerHTML == "0" + `${s}`)
    s = 60;
    secondes.innerHTML = `${s}`;
    minutes.innerHTML = `${m-1}`;
    if(s > 0){
        if(s >= 10){
            s--;
            secondes.innerHTML = `${s}`
        } else {
            s--;
            secondes.innerHTML = "0" + `${s}`;
        }
    } if(s == 0) {
        m--;
        minutes.innerHTML = `${m}`;
        s = 59;
        secondes.innerHTML = `${s}`;
    }


}