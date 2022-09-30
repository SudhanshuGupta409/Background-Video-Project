const btnEl = document.querySelector(".btn");
const btnIEl = document.querySelector(".fa");
const bgVideoEl = document.querySelector(".bgVideo");
const preLoaderEl = document.querySelector(".preLoader");


btnEl.addEventListener("click", ()=>{
    if(btnEl.classList.contains("pause")){
        btnEl.classList.remove("pause");
        bgVideoEl.play();
        btnIEl.classList.add("fa-pause");
        btnIEl.classList.remove("fa-play");
    }else{
        btnEl.classList.add("pause");
        bgVideoEl.pause();
        btnIEl.classList.remove("fa-pause");
        btnIEl.classList.add("fa-play");
    }
});

window.addEventListener("load", ()=>{
    preLoaderEl.style.zIndex = "-2";
})