// Get the menu button and the navigation list.
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Open or close the navigation menu when the button is clicked.
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// Close the menu after the visitor selects a navigation link.
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});
