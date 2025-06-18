const container = document.querySelector(".container")
const coffees = [
{ name: "Perspiciatis", image: "img/coffe2.jpg" },
{ name: "Voluptatem", image: "img/coffe3.jpg" },
{ name: "Explicabo", image: "img/coffe4.jpg" },
{ name: "Rchitecto", image: "img/coffe5.jpg" },
{ name: " Beatae", image: "img/coffe6.jpg" },
{ name: " Vitae", image: "img/coffe7.jpg" },
{ name: "Inventore", image: "img/coffe7.jpg" },
{ name: "Veritatis", image: "img/coffe8.jpg" },
{ name: "Accusantium", image: "img/coffe9.jpg" },
]

const showCoffees = () => {
let output = ""
coffees.forEach(
({ name, image }) =>
(output += `
<div class="card">
<img class="card--avatar" src=${image} />
<h1 class="card--title">${name}</h1>
<a class="card--link" href="#">Taste</a>
</div>
`)

)
container.innerHTML = output
}
document.addEventListener("DOMContentLoaded", showCoffees)
//Registro do Service Worker
if ("serviceWorker" in navigator) {
window.addEventListener("load", function() {
navigator.serviceWorker
.register("/serviceWorker.js")
.then(res => console.log("service worker registered"))
.catch(err => console.log("service worker not registered", err))
})
}