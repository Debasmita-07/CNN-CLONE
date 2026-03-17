
function openMenu() {
    document.querySelectorAll(".mymenu").forEach(menu => {
        menu.style.left = "0";
    });
    document.body.style.overflow = "hidden";
}

function closeNav() {
    document.querySelectorAll(".mymenu").forEach(menu => {
        menu.style.left = "-100%";
    });
    document.body.style.overflow = "auto";
}

