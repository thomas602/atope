console.log("hola");

var tienda = document.getElementById("tienda");
var contacto = document.getElementById("contacto");

tienda.addEventListener("click", MostrarAlerta);
contacto.addEventListener("click", MostrarAlerta);

function MostrarAlerta() {
    alert("Esta sección no está disponible en este momento");
}

