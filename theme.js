document.addEventListener("DOMContentLoaded", () => {
    let boutonTheme = document.querySelector("#themeToggle");

    let mettreAJourIcone = (theme) => {
        if (boutonTheme) {
            boutonTheme.innerHTML = theme === "dark"
                ? '<i class="fa-solid fa-sun" style="color: var(--accent-signal);"></i>'
                : '<i class="fa-solid fa-moon" style="color: #05070D;"></i>';
        }
    };

    let themeSauvegarde = localStorage.getItem("theme") || "dark";

    document.body.classList.toggle("light-theme", themeSauvegarde === "light");
    mettreAJourIcone(themeSauvegarde);

    if (boutonTheme) {
        boutonTheme.addEventListener("click", () => {
            let estClair = document.body.classList.toggle("light-theme");
            let nouveauTheme = estClair ? "light" : "dark";
            localStorage.setItem("theme", nouveauTheme);
            mettreAJourIcone(nouveauTheme);
        });
    }
});