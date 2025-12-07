const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");
const header = document.querySelector("header");

// Open menu
menuBtn.addEventListener("click", () => {
    navMenu.classList.add("show");
});

// Close menu
closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

// Add shadow effect on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        navMenu.classList.remove("show");
    }
});

// Close menu with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        navMenu.classList.remove("show");
    }
});
