if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("/sw.js")

            .then(() => {
                console.log("Service Worker Registered");
            })

            .catch((error) => {
                console.log("Registration Failed", error);
            });

    });

}

// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll(".navigation a");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            header.classList.toggle("nav-open");
        });
    }

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            header.classList.remove("nav-open");
        });
    });
});