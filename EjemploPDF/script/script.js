// Capturamos el botón de generar PDF
const generatePDFButton = document.getElementById("generatePDF");

// Añadimos el evento click para generar el PDF
generatePDFButton.addEventListener("click", function() {
    // Obtenemos los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Accedemos al constructor de jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Añadimos contenido al PDF
    doc.setFontSize(16);
    doc.text("Formulario de Contacto", 10, 10);
    
    doc.setFontSize(12);
    doc.text(`Nombre: ${name}`, 10, 30);
    doc.text(`Correo: ${email}`, 10, 40);
    doc.text("Mensaje:", 10, 50);
    
    // Ajustamos el texto para que se dividir en múltiples línea
    const splitMessage = doc.splitTextToSize(message, 180);
    doc.text(splitMessage, 10, 60);

    // guardar el PDF con un nombre personalizado
    doc.save(`Formulario_${name}.pdf`);
});