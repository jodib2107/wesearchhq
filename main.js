// WESEARCH — MAIN JAVASCRIPT

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");

if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
        const isOpen = primaryNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}

// Smooth scroll for in-page anchors, closing the mobile menu on navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (primaryNav && primaryNav.classList.contains("open")) {
                primaryNav.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        }
    });
});
