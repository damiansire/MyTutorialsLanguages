mensajefrom.addEventListener("submit", (event) => {
    //valor del mensaje
    let textmensaje = document.getElementById("mensaje").value;
    addElement(textmensaje); // llamo a la función para llamar en la lista
    event.preventDefault(); // para que no se recarge la pagina :D
});

function addElement(text) {
    // crea un nuevo li
    var newLi = document.createElement("li");
    // y añade text
    var newContent = document.createTextNode(text);
    //añade texto al li
    newLi.appendChild(newContent);

    // seleccionar la lista mensajes
    var currentLi = document.getElementById("mensajes-list");
    // añadir mensaje la lista :D
    currentLi.appendChild(newLi);
}

listmayuscula.addEventListener("click", () => {
    //selecciona la lista y le asigno la clase de css :D
    document.getElementById("mensajes-list").className = "capi-text";
});