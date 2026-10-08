console.log("InformePro IA: JavaScript conectado correctamente");

const formulario = document.getElementById("informeForm");
const vistaPrevia = document.getElementById("vistaPrevia");
const fotosInput = document.getElementById("fotos");
formulario.addEventListener("submit", function(evento) {

    console.log("EL FORMULARIO SE HA ENVIADO");

    evento.preventDefault();

    // Recoger los datos del formulario

    const empresa = document.getElementById("empresa").value;
    const tecnico = document.getElementById("tecnico").value;
    const cliente = document.getElementById("cliente").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const tituloTrabajo = document.getElementById("titulo").value;
    const fecha = document.getElementById("fecha").value;
    const descripcion = document.getElementById("descripcion").value;
    const materiales = document.getElementById("materiales").value;
    const observaciones = document.getElementById("observaciones").value;
    const recomendaciones = document.getElementById("recomendaciones").value;

    // Mostrar los datos en la consola

    console.log("Datos del informe:");
    console.log("Empresa:", empresa);
    console.log("Técnico:", tecnico);
    console.log("Cliente:", cliente);
    console.log("Dirección:", direccion);
    console.log("Teléfono:", telefono);
    console.log("Trabajo:", tituloTrabajo);
    console.log("Fecha:", fecha);
    console.log("Descripción:", descripcion);
    console.log("Materiales:", materiales);
    console.log("Observaciones:", observaciones);
    console.log("Recomendaciones:", recomendaciones);

    // Crear la vista previa del informe

    vistaPrevia.innerHTML = `
        <h2>INFORME DE SERVICIO</h2>

        <h3>🏢 Empresa</h3>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Técnico:</strong> ${tecnico}</p>

        <h3>👤 Cliente</h3>
        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>

        <h3>🔧 Trabajo realizado</h3>
        <p><strong>Servicio:</strong> ${tituloTrabajo}</p>
        <p>${descripcion}</p>

        <h3>🧰 Materiales utilizados</h3>
        <p>${materiales}</p>

        <h3>⚠️ Observaciones</h3>
        <p>${observaciones}</p>

        <h3>💡 Recomendaciones</h3>
        <p>${recomendaciones}</p>
    `;

    // Crear fondo oscuro

    const fondo = document.createElement("div");

    fondo.style.position = "fixed";
    fondo.style.top = "0";
    fondo.style.left = "0";
    fondo.style.width = "100%";
    fondo.style.height = "100%";
    fondo.style.backgroundColor = "rgba(0, 0, 0, 0.45)";
    fondo.style.display = "flex";
    fondo.style.alignItems = "center";
    fondo.style.justifyContent = "center";
    fondo.style.zIndex = "9999";

    // Crear ventana

    const ventana = document.createElement("div");

    ventana.style.backgroundColor = "white";
    ventana.style.padding = "35px";
    ventana.style.borderRadius = "16px";
    ventana.style.width = "90%";
    ventana.style.maxWidth = "450px";
    ventana.style.textAlign = "center";
    ventana.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.2)";

    // Crear título de la ventana

    const tituloVentana = document.createElement("h2");

    tituloVentana.textContent = "¡Datos recibidos!";

    tituloVentana.style.marginBottom = "12px";
    tituloVentana.style.color = "#111827";

    // Crear mensaje

    const mensaje = document.createElement("p");

    mensaje.textContent =
        "InformePro IA ha recibido correctamente los datos del informe.";

    mensaje.style.color = "#6b7280";
    mensaje.style.lineHeight = "1.6";
    mensaje.style.marginBottom = "25px";

    // Crear botón

    const boton = document.createElement("button");

    boton.textContent = "Aceptar";

    boton.style.backgroundColor = "#2563eb";
    boton.style.color = "white";
    boton.style.border = "none";
    boton.style.borderRadius = "9px";
    boton.style.padding = "12px 28px";
    boton.style.fontSize = "15px";
    boton.style.fontWeight = "bold";
    boton.style.cursor = "pointer";

    // Cerrar ventana

    boton.addEventListener("click", function() {

        fondo.remove();

    });

    // Montar ventana

    ventana.appendChild(tituloVentana);
    ventana.appendChild(mensaje);
    ventana.appendChild(boton);

    fondo.appendChild(ventana);

    document.body.appendChild(fondo);

});
