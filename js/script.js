document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        });
        
        navbar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menuIcon.classList.remove("bx-x");
                navbar.classList.remove("active");
            });
        });
    }
});