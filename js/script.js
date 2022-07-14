console.log("hello world");

let button = document.querySelector(".js-button");
let poemVerseFine = document.querySelector(".aside__view");
let inlineText = document.querySelector(".js-button--modificator")

button.addEventListener("click", () => {
    poemVerseFine.classList.toggle("aside__view--modificator");
    if (poemVerseFine.classList.contains("aside__view--modificator")) {
        inlineText.innerText = "jasny"
    } else {
        inlineText.innerText = "czerwony"
    }
});