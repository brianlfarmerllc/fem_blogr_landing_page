// var
const login = document.querySelector("#login")
const links = document.querySelector("#intro-links")
const navUl = document.querySelector("#main-ul")
const inactiveUl = document.querySelectorAll("#dropUL-inactive")
const arrow = document.querySelectorAll("#arrow")

// functions
function toggleActive(event) {
    // function vars
    const target = event.target;
    const childList = event.target.parentElement.children;
    const img = event.target.children[0];
    const hiddenUl = event.target.parentElement.children[1];
    // clear all active classes
    inactiveUl.forEach(ul => ul.classList.remove("dropUl"));
    arrow.forEach(img => img.classList.remove("active"));
    // function for targets
    if (target.className != "active" && target.localName === "button") {
        for (const button of childList) {
            button.classList.toggle("active");
        }
    } else if (target.localName === "a") {
        img.classList.toggle("active");
        hiddenUl.classList.toggle("dropUl");
    }
}

// events

login.addEventListener("click", toggleActive);
links.addEventListener("click", toggleActive);
navUl.addEventListener("click", toggleActive);