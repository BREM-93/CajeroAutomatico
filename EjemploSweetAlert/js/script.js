// Seleccionamos el formulario
const form = document.getElementById("contactForm");

// Añadimos un evento 'submit' al formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtenemos los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Validamos que los campos no estén vacíos
    if (name === "" || email === "") {
        swal({
            title: "Error",
            text: "Por favor completa todos los campos.",
            icon: "error",
            button: "Aceptar",
        });
    } else {
        // Mostramos la alerta de confirmación utilizando SweetAlert
        swal({
            title: "¡Formulario enviado!",
            text: `Gracias ${name}, hemos recibido tu mensaje. Te contactaremos a ${email}.`,
            icon: "success",
            button: "Cerrar",
        }).then(() => {
            form.reset(); // Reseteamos el formulario después de mostrar la alerta
        });
    }
});