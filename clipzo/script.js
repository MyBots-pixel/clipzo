// ==========================================
// CLIPZO - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// THEME TOGGLE
// ==========================================

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("clipzo-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeButton.textContent = "☀️";
} else {
    themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀️";

        localStorage.setItem(
            "clipzo-theme",
            "light"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "clipzo-theme",
            "dark"
        );
    }

});


// ==========================================
// SEARCH
// ==========================================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function searchClipzo() {

    const searchText =
        searchInput.value.trim();

    if (searchText === "") {

        alert("Please enter something to search.");

        return;
    }

    alert(
        `Clipzo search coming soon!\n\nYou searched for: ${searchText}`
    );
}

searchButton.addEventListener(
    "click",
    searchClipzo
);

searchInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {
            searchClipzo();
        }

    }
);


// ==========================================
// CATEGORY BUTTONS
// ==========================================

const categories =
    document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");

        console.log(
            "Selected category:",
            category.textContent
        );

    });

});


// ==========================================
// SIDEBAR NAVIGATION
// ==========================================

const navItems =
    document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", (event) => {

        event.preventDefault();

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

        console.log(
            "Selected:",
            item.textContent.trim()
        );

    });

});


// ==========================================
// LOGIN BUTTON
// ==========================================

const loginButton =
    document.getElementById("loginButton");

loginButton.addEventListener("click", () => {

    alert(
        "Clipzo Accounts are coming next!"
    );

});


// ==========================================
// STUDIO BUTTON
// ==========================================

const studioButton =
    document.getElementById("studioButton");

studioButton.addEventListener("click", () => {

    alert(
        "Welcome to Clipzo Studio!\n\n" +
        "Creator Studio will be built next."
    );

});


// ==========================================
// VIDEO CARDS
// ==========================================

const videoCards =
    document.querySelectorAll(".video-card");

videoCards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
            card.querySelector("h3").textContent;

        alert(
            `Video player coming soon!\n\n${title}`
        );

    });

});


// ==========================================
// PAGE LOADED
// ==========================================

console.log(
    "🎬 Clipzo loaded successfully!"
);