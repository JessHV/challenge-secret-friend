// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function agregarAmigo(){
    //let nuevoAmigo = document.getElementById("nuevoAmigo").value;
    let nuevoAmigo = document.getElementById("amigo").value;
    if(nuevoAmigo == ""){
        alert("Por favor, ingresar un nombre");
    } else {
        amigos.push(nuevoAmigo);
        document.querySelector("#amigo").value = "";
    }
    if (amigos.length >= 2){
        document.getElementById("listaAmigos").innerHTML = "<li>" + amigos[0] + "</li>";

    }
    console.log(amigos);
    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    let listaActualizadaAmigos = document.getElementById("listaAmigos");
    listaActualizadaAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        listaActualizadaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo(){
    let amigoSorteado
    if (amigos.length == 1){
        alert("Ingrese el minimo de amigos");
    } else if (amigos.length != 0){
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = "<li> ¡El amigo secreto es " + amigoSorteado + "! 🎉</li>";
    } else if (amigos.length == 0){
        alert("No hay amigos en la lista");
    }
}
