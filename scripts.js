// var
const login = document.querySelector("#login")
const links = document.querySelector("#intro-links")

// functions
function toggleActive(event) {
    const target = event.target.className
    const childList = event.target.parentElement.children
    if (target != "active") {
        for (const button of childList) {
            button.classList.toggle("active")
        }
    }
}

// events

login.addEventListener("click", toggleActive);
links.addEventListener("click", toggleActive);