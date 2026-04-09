function myFunction() {
    document.getElementById("links").classList.toggle("responsive");
}

function close_nav() {
    document.getElementById("links").classList.remove("responsive");
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const profileImg = document.querySelector(".profile-image img");
    if (profileImg) {
        profileImg.src = theme === "dark" ? "images/vikram3.jpg" : "images/vikram2.jpg";
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
}

// Initialize theme on load
(function () {
    const saved = localStorage.getItem("theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(saved || preferred);
})();

