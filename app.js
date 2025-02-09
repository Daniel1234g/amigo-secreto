// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Primero se declara la lista donde se guardaran los participantes
let participantes = [];
// Se realiza la funcion que permite agregar los participantes a la lista
function agregarAmigo() {
    // Se obtiene el nombre del participante mediante el input
    let nombre = document.getElementById("amigo").value;

    // Se verifica si el nombre no está vacío
    if (nombre === "") {
        alert("Por favor ingrese el nombre del participante.");
    } else if (participantes.includes(nombre)) { // Se verifica que el nombre no se repita
        alert("Ese nombre ya se encuentra en la lista.");
    } else {
        participantes.push(nombre); // Se agrega el nombre a la lista
        
        mostrarLista() // Se actualiza la lista en la pantalla
    }

    // Se limpia el input después de agregar el nombre
    document.getElementById("amigo").value = "";
}

//Funcion para mostrar lista de amigos en pantalla
function mostrarLista() {
//declarando la variable de "lista" y obteniendo lo de la lista mostrada en pantalla mediante el id
let lista = document.getElementById("listaAmigos");
//Se utiliza el método innerHTML para mostrar los nombres de los participantes en la lista
lista.innerHTML = "";
//Se utiliza un for para recorrer la lista de participantes y mostrarlos en pantalla
for (let i = 0; i < participantes.length; i++) {
    let item = document.createElement("li");
    item.textContent = participantes[i];
    lista.appendChild(item);
    }
    

    
}
// Función para agregar participante al presionar la tecla "Enter"
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") { // Se verifica si la tecla presionada es "Enter"
        agregarAmigo(); // Se llama a la función para agregar el participante
    }
});

//Se crea la funcion para sortear amigo
function sortearAmigo() {
    if (participantes.length<3){ //se compara la lista de amigos agregada con minimo 3 para poder realizar el sorteo
        alert("Debes tener al menos 3 amigos para sortear");//se alerta si son menos de 3
        return;
    }
    let copia= participantes.slice(); //se realiza una copia de la lista para no afectar la lista original
    let resultado={};// se guardara los amigos sorteados
   
    for(let i=0;i<participantes.length;i++){ //Se emplea un ciclo for para recorrer toda la lista de participantes
        let persona=participantes[i]; //Representa el nombre del participante actual
        let indiceAleatorio=Math.floor(Math.random()*copia.length);// Se genera un numero para obtener la posicion de la lista

        while(copia[indiceAleatorio]===persona){//Si el nombre es el mismo que la persona, se elige otro
            indiceAleatorio=Math.floor(Math.random()*copia.length);
        }
        resultado[persona]=copia[indiceAleatorio];//Se guarda el amigo secreto en la variable resultado
        copia.splice(indiceAleatorio,1); //Elimina el nombre resultante de la lista copia
    }
    mostrarSorteo(resultado);//se muestra lista de resultado
    limpiarCaja();//Se limpia la lista mostrada de los amigos
}

//Se crea la funcion para mostrar el resultado del sorteo
function mostrarSorteo(resultado) {
    let listaResultado=document.getElementById("resultado");//Se extrae el resultado de la lista mostrada
    listaResultado.innerHTML=""; //Se limpia la lista para evitar duplicados
    for(let clave in resultado){ //Se usa un ciclo for para recorrer la lista
        let item=document.createElement("li"); //Se crea un <li> para cada participante
        item.textContent=clave+" es el amigo secreto de "+resultado[clave]; //Se muestra el nombre del participante y el amigo secreto 
        listaResultado.appendChild(item); //Se inserta en una lista
    }
    
}
    
    
function limpiarCaja() {
        document.getElementById("listaAmigos").innerHTML = " "; // Limpia la lista de participantes
        participantes = []; // Vacía el array de participantes
    }
