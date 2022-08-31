let elBurger = document.querySelector(".header__logo-burger");
let navMenyu = document.querySelector("header__nav");
let elBody = document.querySelector("body")

elBurger.addEventListener("click" , () =>{
    elBurger.closest(".header").classList.toggle("shownav")
})

elBurger.addEventListener("click" , () => {
    elBody.classList.toggle("shownav")
})
