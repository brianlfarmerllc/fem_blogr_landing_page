// var
const login = document.querySelector("#login")
const links = document.querySelector("#intro-links")
const navUl = document.querySelector("#main-ul")

// functions
function toggleActive(event) {
    const target = event.target
    const childList = event.target.parentElement.children
    const img = event.target.children[0]
    const hiddenUl = event.target.parentElement.children[1]
    if (target.className != "active" && target.localName === "button") {
        for (const button of childList) {
            button.classList.toggle("active")
        }
    } else if (target.localName === "a") {
        img.classList.toggle("active");
        hiddenUl.classList.toggle("dropUl");
    } else {

    }
}

// function dropUl(event) {
//     event.stop
//     const hiddenUl = event.target.parentElement.children[1]
//     const img = event.target.children[0]
//     hiddenUl.classList.toggle("dropUl")
//     img.classList.toggle("active")
// }

// events

login.addEventListener("click", toggleActive);
links.addEventListener("click", toggleActive);
navUl.addEventListener("click", toggleActive);