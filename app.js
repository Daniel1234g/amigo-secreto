// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Primero se declara la lista donde se guardaran los participantes
let participantes = [];
// Se realiza la funcion que permite agregar los participantes a la lista
function agregarParticipantes() {
    // Se obtiene el nombre del participante mediante el input
    let nombre = document.getElementById("amigo").value;

    // Se verifica si el nombre no está vacío
    if (nombre === "") {
        alert("Por favor ingrese el nombre del participante.");
    } else if (participantes.includes(nombre)) { // Se verifica que el nombre no se repita
        alert("Ese nombre ya se encuentra en la lista.");
    } else {
        participantes.push(nombre); // Se agrega el nombre a la lista
        
        mostrarLista(); // Se actualiza la lista en la pantalla
    }

    // Se limpia el input después de agregar el nombre
    document.getElementById("amigo").value = "";
}
