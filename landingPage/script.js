const hamburguerButton = document.querySelector("#hamburguer-button")
const CloseButton = document.querySelector("#close-button")
const toogleMenu = document.querySelector("#toogle-menu")
const inputText = document.querySelector("#text")
const clearButton = document.querySelector("#clear-button")

hamburguerButton.addEventListener("click", ()=>{
toogleMenu.classList.remove("show")
})

CloseButton.addEventListener("click", ()=>{
    toogleMenu.classList.add("show")
})

clearButton.addEventListener("click", ()=>{
    inputText.value = ""
})