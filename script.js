
// DARK MODE

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    localStorage.setItem("darkMode", darkMode);

}


// Remember user's theme

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark");

}

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// SIMPLE PAGE LOADING EFFECT


window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// EMERGENCY BUTTON


const emergencyButton =
    document.querySelector(".emergency-floating");

if (emergencyButton) {

    emergencyButton.addEventListener("click", () => {

        const confirmed = confirm(
            "Call the hospital emergency department?"
        );

        if (!confirmed) {
            event.preventDefault();
        }

    });

}