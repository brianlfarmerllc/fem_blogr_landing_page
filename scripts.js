// var
const login = document.querySelector("#login")
const links = document.querySelector("#intro-links")
const navUl = document.querySelector("#main-ul")
const navLi = document.querySelectorAll(".main-li")
const inactiveUl = document.querySelectorAll(".dropUL-inactive")
const arrow = document.querySelectorAll(".arrow")
const burger = document.querySelector("#burgerX")

// functions
function toggleActive(event) {
    // function vars
    const target = event.target;
    const childList = event.target.parentElement.children;
    // function for targets
    if (target.className != "active" && target.localName === "button") {
        for (const button of childList) {
            button.classList.toggle("active");
        }
    }
}

function navOpen(event) {
    // function vars
    const target = event.target;
    const img = event.target.children[0];
    const hiddenUl = event.target.parentElement.children[1];

    // function for targets
    if (target.localName === "a" && img.className != "flip arrow active") {
        inactiveUl.forEach(ul => ul.classList.remove("dropUl"));
        arrow.forEach(img => img.classList.remove("active"));
        img.classList.add("active");
        hiddenUl.classList.toggle("dropUl");
    }
    else if (target.localName === "a" && img.className === "flip arrow active") {
        arrow.forEach(img => img.classList.remove("active"));
        hiddenUl.classList.toggle("dropUl");
    }
}

function burgerOpen(event) {
    console.log(this)
    this.classList.toggle("active")
}


// events

login.addEventListener("click", toggleActive);
links.addEventListener("click", toggleActive);
navUl.addEventListener("click", navOpen);
burger.addEventListener("click", burgerOpen);
