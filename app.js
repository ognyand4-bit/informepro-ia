console.log("InformePro IA iniciado correctamente");

const formulario = document.getElementById("informeForm");
const vistaPrevia = document.getElementById("vistaPrevia");
const fotosInput = document.getElementById("fotos");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    // ==============================
    // RECOGER DATOS
    // ==============================

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

    // ==============================
    // FOTOGRAFÍAS
    // ==============================

    const fotografias = fotosInput.files;

    console.log("Número de fotografías:", fotografias.length);

    // ==============================
    // CREAR VISTA PREVIA
    // ==============================

    vistaPrevia.innerHTML = `

        <h2>INFORME DE SERVICIO</h2>

        <h3>🏢 Empresa</h3>

        <p>
            <strong>Empresa:</strong>
            ${empresa}
        </p>

        <p>
            <strong>Técnico:</strong>
            ${tecnico}
        </p>

        <h3>👤 Cliente</h3>

        <p>
            <strong>Cliente:</strong>
            ${cliente}
        </p>

        <p>
            <strong>Dirección:</strong>
            ${direccion}
        </p>

        <p>
            <strong>Teléfono:</strong>
            ${telefono || "No especificado."}
        </p>

        <h3>🔧 Trabajo realizado</h3>

        <p>
            <strong>Servicio:</strong>
            ${tituloTrabajo}
        </p>

        <p>
            <strong>Fecha:</strong>
            ${fecha}
        </p>

        <p>
            ${descripcion}
        </p>

        <h3>🧰 Materiales utilizados</h3>

        <p>
            ${materiales || "No especificados."}
        </p>

        <h3>⚠️ Observaciones</h3>

        <p>
            ${observaciones || "No se han indicado observaciones."}
        </p>

        <h3>💡 Recomendaciones</h3>

        <p>
            ${recomendaciones || "No se han indicado recomendaciones."}
        </p>

        <h3>📸 Fotografías del trabajo</h3>

        <div id="galeriaFotos" class="galeria-fotos"></div>

    `;

    // ==============================
    // MOSTRAR FOTOGRAFÍAS
    // ==============================

    const galeria = document.getElementById("galeriaFotos");

    if (fotografias.length === 0) {

        galeria.innerHTML = `
            <p>No se han añadido fotografías.</p>
        `;

    } else {

        for (let i = 0; i < fotografias.length; i++) {

            const foto = fotografias[i];

            const lector = new FileReader();

            lector.onload = function(evento) {

                const contenedor = document.createElement("div");

                contenedor.className = "foto-informe";

                const imagen = document.createElement("img");

                imagen.src = evento.target.result;

                imagen.alt = "Fotografía del trabajo " + (i + 1);

                contenedor.appendChild(imagen);

                galeria.appendChild(contenedor);

            };

            lector.readAsDataURL(foto);
        }
    }

    // ==============================
    // VENTANA DE CONFIRMACIÓN
    // ==============================

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

    const ventana = document.createElement("div");

    ventana.style.backgroundColor = "white";
    ventana.style.padding = "35px";
    ventana.style.borderRadius = "16px";
    ventana.style.width = "90%";
    ventana.style.maxWidth = "450px";
    ventana.style.textAlign = "center";
    ventana.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.2)";

    const tituloVentana = document.createElement("h2");

    tituloVentana.textContent = "¡Datos recibidos!";

    tituloVentana.style.marginBottom = "12px";
    tituloVentana.style.color = "#111827";

    const mensaje = document.createElement("p");

    mensaje.textContent =
        "InformePro IA ha recibido correctamente los datos del informe.";

    mensaje.style.color = "#6b7280";
    mensaje.style.lineHeight = "1.6";
    mensaje.style.marginBottom = "25px";

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

    boton.addEventListener("click", function() {

        fondo.remove();

        // Llevar automáticamente al usuario
        // hasta la vista previa del informe

        vistaPrevia.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

    ventana.appendChild(tituloVentana);
    ventana.appendChild(mensaje);
    ventana.appendChild(boton);

    fondo.appendChild(ventana);

    document.body.appendChild(fondo);

});
