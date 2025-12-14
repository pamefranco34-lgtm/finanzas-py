// ✅ Aumentar tamaño del texto
function aumentarTexto() {
    document.body.classList.add("texto-grande");
    document.body.classList.remove("texto-pequeno");
}

// ✅ Disminuir tamaño del texto
function disminuirTexto() {
    document.body.classList.add("texto-pequeno");
    document.body.classList.remove("texto-grande");
}

// ✅ Modo alto contraste
function toggleContraste() {
    document.body.classList.toggle("alto-contraste");
}

// ✅ Modo daltonismo
function toggleDaltonismo() {
    document.body.classList.toggle("daltonismo");
}

// ✅ Menú responsive
function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("show");
}
