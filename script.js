function menuBar() {
    const aside = document.getElementById('aside');
    const menuImg = document.getElementById('menuImg');
    aside.style.display = aside.style.display === "flex" ? "none" : "flex";
    menuImg.src = menuImg.getAttribute('src') === "menu.png" ? "close.png" : "menu.png";
}

function theme() {
    const themeImg = document.getElementById('themeImg');
    document.body.classList.toggle('light-mode');
    themeImg.src = themeImg.getAttribute('src') === "lightMode.png" ? "nightMode.png" : "lightMode.png";
}