
console.log("InformePro IA iniciado correctamente");

// ============================================
// ELEMENTOS PRINCIPALES
// ============================================

const formulario = document.getElementById("informeForm");
const vistaPrevia = document.getElementById("vistaPrevia");
const fotosInput = document.getElementById("fotos");

// Comprobar que los elementos existen
if (!formulario || !vistaPrevia || !fotosInput) {
    console.error(
        "Error: no se encuentra el formulario, la vista previa o el selector de fotos."
    );
} else {

    // ============================================
    // ENVIAR FORMULARIO
    // ============================================

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        try {

            // ========================================
            // RECOGER DATOS
            // ========================================

            const empresa = document.getElementById("empresa").value.trim();
            const tecnico = document.getElementById("tecnico").value.trim();

            const cliente = document.getElementById("cliente").value.trim();
            const direccion = document.getElementById("direccion").value.trim();
            const telefono = document.getElementById("telefono").value.trim();

            const tituloTrabajo = document.getElementById("titulo").value.trim();
            const fecha = document.getElementById("fecha").value;
            const descripcion = document.getElementById("descripcion").value.trim();

            const materiales = document.getElementById("materiales").value.trim();
            const observaciones = document.getElementById("observaciones").value.trim();
            const recomendaciones = document.getElementById("recomendaciones").value.trim();

            const fotografias = Array.from(fotosInput.files);

            console.log("Número de fotografías:", fotografias.length);

            // ========================================
            // CREAR INFORME
            // ========================================

            vistaPrevia.innerHTML = "";

            const crearSeccion = (titulo, contenido) => {
                const seccion = document.createElement("section");
                seccion.style.marginBottom = "24px";

                const encabezado = document.createElement("h3");
                encabezado.textContent = titulo;
                encabezado.style.marginBottom = "10px";

                const texto = document.createElement("p");
                texto.style.whiteSpace = "pre-wrap";
                texto.style.overflowWrap = "anywhere";
                texto.textContent = contenido || "No especificado.";

                seccion.appendChild(encabezado);
                seccion.appendChild(texto);

                return seccion;
            };

            const tituloInforme = document.createElement("h2");
            tituloInforme.textContent = "INFORME DE SERVICIO";
            tituloInforme.style.marginBottom = "24px";
            vistaPrevia.appendChild(tituloInforme);

            // Empresa y técnico
            vistaPrevia.appendChild(
                crearSeccion(
                    "🏢 Empresa",
                    "Empresa: " + (empresa || "No especificada.") +
                    "\nTécnico: " + (tecnico || "No especificado.")
                )
            );

            // Datos del cliente
            vistaPrevia.appendChild(
                crearSeccion(
                    "👤 Cliente",
                    "Cliente: " + (cliente || "No especificado.") +
                    "\nDirección: " + (direccion || "No especificada.") +
                    "\nTeléfono: " + (telefono || "No especificado.")
                )
            );

            // Trabajo realizado
            vistaPrevia.appendChild(
                crearSeccion(
                    "🔧 Trabajo realizado",
                    "Servicio: " + (tituloTrabajo || "No especificado.") +
                    "\nFecha: " + (fecha || "No especificada.") +
                    "\n\nDescripción:\n" + (descripcion || "Sin descripción.")
                )
            );

            // Materiales
            vistaPrevia.appendChild(
                crearSeccion(
                    "🧰 Materiales utilizados",
                    materiales || "No se han especificado materiales."
                )
            );

            // Observaciones
            vistaPrevia.appendChild(
                crearSeccion(
                    "⚠️ Observaciones",
                    observaciones || "No se han indicado observaciones."
                )
            );

            // Recomendaciones
            vistaPrevia.appendChild(
                crearSeccion(
                    "💡 Recomendaciones",
                    recomendaciones || "No se han indicado recomendaciones."
                )
            );

            // ========================================
            // FOTOGRAFÍAS
            // ========================================

            const seccionFotos = document.createElement("section");
            seccionFotos.style.marginTop = "25px";

            const tituloFotos = document.createElement("h3");
            tituloFotos.textContent = "📸 Fotografías del trabajo";
            tituloFotos.style.marginBottom = "15px";

            seccionFotos.appendChild(tituloFotos);

            const galeria = document.createElement("div");
            galeria.id = "galeriaFotos";
            galeria.className = "galeria-fotos";

            seccionFotos.appendChild(galeria);
            vistaPrevia.appendChild(seccionFotos);

            if (fotografias.length === 0) {

                const mensajeFotos = document.createElement("p");
                mensajeFotos.textContent = "No se han añadido fotografías.";
                galeria.appendChild(mensajeFotos);

            } else {

                fotografias.forEach((foto, indice) => {

                    const lector = new FileReader();

                    lector.onload = function (resultado) {

                        const contenedor = document.createElement("div");
                        contenedor.className = "foto-informe";

                        const imagen = document.createElement("img");
                        imagen.src = resultado.target.result;
                        imagen.alt = "Fotografía del trabajo " + (indice + 1);
                        imagen.loading = "lazy";
                        imagen.style.maxWidth = "100%";
                        imagen.style.height = "auto";
                        imagen.style.display = "block";
                        imagen.style.borderRadius = "10px";

                        contenedor.appendChild(imagen);
                        galeria.appendChild(contenedor);
                    };

                    lector.onerror = function () {
                        console.error("No se pudo cargar la fotografía:", foto.name);
                    };

                    lector.readAsDataURL(foto);
                });
            }

            // ========================================
            // MOSTRAR VISTA PREVIA
            // ========================================

            vistaPrevia.classList.add("visible");

            console.log(
                "Vista previa visible:",
                vistaPrevia.classList.contains("visible")
            );

            // ========================================
            // VENTANA DE CONFIRMACIÓN
            // ========================================

            const fondo = document.createElement("div");

            fondo.style.position = "fixed";
            fondo.style.inset = "0";
            fondo.style.width = "100%";
            fondo.style.height = "100%";
            fondo.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
            fondo.style.display = "flex";
            fondo.style.alignItems = "center";
            fondo.style.justifyContent = "center";
            fondo.style.padding = "20px";
            fondo.style.boxSizing = "border-box";
            fondo.style.zIndex = "9999";

            const ventana = document.createElement("div");

            ventana.style.backgroundColor = "#ffffff";
            ventana.style.color = "#111827";
            ventana.style.padding = "30px";
            ventana.style.borderRadius = "16px";
            ventana.style.width = "100%";
            ventana.style.maxWidth = "450px";
            ventana.style.textAlign = "center";
            ventana.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.25)";

            const tituloVentana = document.createElement("h2");
            tituloVentana.textContent = "¡Datos recibidos!";
            tituloVentana.style.marginTop = "0";
            tituloVentana.style.marginBottom = "12px";

            const mensaje = document.createElement("p");
            mensaje.textContent =
                "Los datos del informe se han procesado correctamente. Ahora puedes revisar la vista previa.";
            mensaje.style.color = "#4b5563";
            mensaje.style.lineHeight = "1.6";
            mensaje.style.marginBottom = "24px";

            const boton = document.createElement("button");
            boton.type = "button";
            boton.textContent = "Ver informe";
            boton.style.backgroundColor = "#2563eb";
            boton.style.color = "#ffffff";
            boton.style.border = "none";
            boton.style.borderRadius = "9px";
            boton.style.padding = "12px 28px";
            boton.style.fontSize = "15px";
            boton.style.fontWeight = "bold";
            boton.style.cursor = "pointer";

            boton.addEventListener("click", function () {

                fondo.remove();

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

        } catch (error) {

            console.error("Error al generar la vista previa:", error);

            alert(
                "Ha ocurrido un error al generar el informe. " +
                "Abre la consola del navegador para ver los detalles."
            );
        }

    });
}
