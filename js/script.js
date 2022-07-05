console.log("hello world");

let button = document.querySelector(".button");
let poemVerseFine = document.querySelector(".body__view--fine");
let inlineText = document.querySelector(".button--modificator")

button.addEventListener("click", () => {
    poemVerseFine.classList.toggle("body__view--red");
    if (poemVerseFine.classList.contains("body__view--red")) {
        inlineText.innerText = "jasny"
    } else {
        inlineText.innerText = "czerwony"
}});