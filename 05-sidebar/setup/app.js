const containerEl = document.querySelector(".container")
const btn = document.querySelectorAll(".btn")

console.log(btn)

btn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        containerEl.classList.toggle("hide-el")
        console.log(btn)
    })
})