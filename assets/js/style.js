function toggleNav() {
    const body = document.body;
    const navList = document.getElementById('nav-list');
    const burgerMenu = document.getElementById('burger-menu');

    body.classList.toggle('overflow_hidden');
    navList.classList.toggle('show');


    burgerMenu.classList.toggle('cross');
}
const items = document.querySelectorAll(".recycle-accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
    }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
//  Back To Top 
function backToTop() {
    window.scrollTo(0, 0);
}
document.getElementById('backToTop').addEventListener("click", backToTop)
window.addEventListener("scroll", function () {
    const mybackto = document.getElementById("backToTop");
    if (window.scrollY > 50) {
        mybackto.style.display = "block";
    } else {
        mybackto.style.display = "none";
    }
});
// preloder
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
}, 3000);

