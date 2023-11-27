//select arrows
const arrowPrev = document.querySelector(".arrow__prev")
const arrowNext = document.querySelector(".arrow__next")

//select person
const firstPerson = document.querySelector(".first-person-text")
const secondPerson = document.querySelector(".second-person-text")


arrowNext.addEventListener("click", function () {
    if (firstPerson.style.display = "block") {
        firstPerson.style.display = "none"
        secondPerson.style.display = "block"
    }
})

arrowPrev.addEventListener("click", function () {
    if (secondPerson.style.display = "block") {
        secondPerson.style.display = "none"
        firstPerson.style.display = "block"
    }
})

