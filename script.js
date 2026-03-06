document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
window.addEventListener("scroll", function() {

const header = document.querySelector("header");
header.classList.toggle("scrolled", window.scrollY > 50);

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(reveal => {

const windowHeight = window.innerHeight;
const revealTop = reveal.getBoundingClientRect().top;
const revealPoint = 150;

if(revealTop < windowHeight - revealPoint){
    reveal.classList.add("active");
}

});

});
