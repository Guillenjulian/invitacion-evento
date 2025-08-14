// Esperamos que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!nombre || !email.includes("@")) {
            alert("⚠️ Por favor, ingresa datos válidos.");
            return;
        }

        // Número de WhatsApp (con código de país, sin + ni espacios)
        const numeroWhatsApp = "541150287136"; // ← reemplaza por tu número real

        // Mensaje prellenado
        const mensaje = `Hola, soy ${nombre}. Confirmo asistencia al evento. Mi email es ${email}`;

        // Codificar mensaje para URL
        const mensajeCodificado = encodeURIComponent(mensaje);

        // Abrir WhatsApp en nueva pestaña
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, "_blank");
          // Mostrar mensaje de agradecimiento
        form.innerHTML = `
            <h2 style="text-align:center; color:green;">✅ ¡Gracias por confirmar tu asistencia!</h2>
            <p style="text-align:center;">Te esperamos el día del evento, ${nombre}.</p>
        `;
    });
});
