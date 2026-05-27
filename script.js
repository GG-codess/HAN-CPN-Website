// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Header scroll effect and reveal animations
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

// Brand navigation function
function openBrand(brandName) {
    switch(brandName) {
        case 'hancpn':
            window.location.href = 'hancpn.html';
            break;
        case '091021':
            window.location.href = 'zero-nine-one-zero-two-one.html';
            break;
        case 'mandelas':
            window.location.href = 'mandelas.html';
            break;
        case 'artbyhan':
            window.location.href = 'artbyhan.html';
            break;
        default:
            console.log('Opening brand: ' + brandName);
    }
}
