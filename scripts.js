// var
const login = document.querySelector("#login")
const links = document.querySelector("#intro-links")
const navUl = document.querySelector("#main-ul")

// functions
function toggleActive(event) {
    const target = event.target
    const childList = event.target.parentElement.children
    const img = event.target.children[0]
    if (target.className != "active" && target.localName === "button") {
        for (const button of childList) {
            button.classList.toggle("active")
        }
    } else if (target.localName === "a") {
        img.classList.toggle("active")
    } else {

    }
}

// function flipArrow(event) {
//     const img = event.target.children[0]
//     console.log(img.className)
//     img.classList.toggle("active")
// }

// events

login.addEventListener("click", toggleActive);
links.addEventListener("click", toggleActive);
navUl.addEventListener("click", toggleActive);