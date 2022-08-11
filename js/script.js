{
    const welcome = () => {
        console.log("hello world");
    };

    const toggleBackground = () => {
        const poemVerseFine = document.querySelector(".aside__view");
        const inlineText = document.querySelector(".js-button--modificator")

        poemVerseFine.classList.toggle("aside__view--modificator");
        if (poemVerseFine.classList.contains("aside__view--modificator")) {
            inlineText.innerText = "jasny"
        } else {
            inlineText.innerText = "czerwony"
        }
    };

    welcome();

    const init = () => {

        const button = document.querySelector(".js-button");

        button.addEventListener("click", toggleBackground);
    }

    init();
}