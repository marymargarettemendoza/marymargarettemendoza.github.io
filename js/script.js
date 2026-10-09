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

    const welcomeScreen = document.querySelector("#welcome-screen");
    const enterButton = document.querySelector("#enter-portfolio");

    if (welcomeScreen && enterButton) {
        enterButton.addEventListener("click", () => {
            welcomeScreen.classList.add("hide");

            document.body.style.overflow = "auto";

            welcomeScreen.addEventListener("transitionend", (event) => {
                if (
                    event.target === welcomeScreen &&
                    event.propertyName === "opacity"
                ) {
                    welcomeScreen.remove();
                }
            }, { once: true });
        });
    }
});