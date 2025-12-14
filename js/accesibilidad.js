function aumentarTexto() {
    document.body.style.fontSize = "larger";
}

function disminuirTexto() {
    document.body.style.fontSize = "smaller";
}

function toggleContraste() {
    document.body.classList.toggle("alto-contraste");
}

function toggleDaltonismo() {
    document.body.classList.toggle("daltonismo");
}

function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("show");
}
