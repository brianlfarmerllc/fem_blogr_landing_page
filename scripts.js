// var
const login = document.querySelector("#login");
const mobilLogin = document.querySelector("#mobil-login");
const links = document.querySelector("#intro-links");
const navUl = document.querySelector("#main-ul");
const navLi = document.querySelectorAll(".main-li");
const inactiveUl = document.querySelectorAll(".dropUL-inactive");
const arrow = document.querySelectorAll(".arrow");
const burger = document.querySelector("#burgerX");
const mobilMenu = document.querySelector(".mobilUl-container");

// functions

// reset munu and menue items when screen size is above mobil view
function resize() {
  if (window.innerWidth > 1050) {
    burger.classList.remove("active");
    mobilMenu.classList.remove("nav-open");
    inactiveUl.forEach((ul) => ul.classList.remove("dropUl"));
    arrow.forEach((img) => img.classList.remove("active"));
  }
}

// toggle acctive buttons when clicked
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

// Handeler for menu and submenu
function navOpen(event) {
  // function vars
  const target = event.target;
  const img = event.target.children[0];
  const hiddenUl = event.target.parentElement.children[1];

  // function for targets
  if (target.localName === "a" && target.className === "sub-li") {
    burger.classList.remove("active");
    mobilMenu.classList.remove("nav-open");
    inactiveUl.forEach((ul) => ul.classList.remove("dropUl"));
    arrow.forEach((img) => img.classList.remove("active"));
  } else if (target.localName === "a" && img.className != "flip arrow active") {
    inactiveUl.forEach((ul) => ul.classList.remove("dropUl"));
    arrow.forEach((img) => img.classList.remove("active"));
    img.classList.add("active");
    hiddenUl.classList.toggle("dropUl");
  } else if (
    target.localName === "a" &&
    img.className === "flip arrow active"
  ) {
    arrow.forEach((img) => img.classList.remove("active"));
    hiddenUl.classList.toggle("dropUl");
  }
}

// seperate toggle for button
function burgerOpen() {
  this.classList.toggle("active");
  mobilMenu.classList.toggle("nav-open");
}

// events

login.addEventListener("click", toggleActive);
mobilLogin.addEventListener("click", toggleActive);
links.addEventListener("click", toggleActive);
navUl.addEventListener("click", navOpen);
burger.addEventListener("click", burgerOpen);
window.addEventListener("resize", resize);
