var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

toggle.addEventListener("click", () => {    
    if (toggle.className === "btn bi bi-toggle-off") {
        setTheme("dark");
    } else if (toggle.className === "btn bi bi-toggle-on") {
        setTheme("light");
    }
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "btn bi bi-toggle-on";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "btn bi bi-toggle-off";
    }
}
