document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
const brands = document.querySelectorAll(".brand");

window.addEventListener("scroll", () => {
  brands.forEach(brand => {
    const top = brand.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      brand.classList.add("show");
    }
  });
});
