console.log("InformePro IA: JavaScript conectado correctamente");

const formulario = document.getElementById("informeForm");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    alert("¡Perfecto! InformePro IA ha recibido los datos del informe.");

});
