// Función para guardar los datos del formulario en localStorage
function guardarDatos() {
    // Obtener los valores del formulario
    var nombreApellido = document.querySelector('input[name="nombre y apellido"]').value;
    var correoElectronico = document.querySelector('input[name="correo_electronico"]').value;
    var fechaNacimiento = document.querySelector('input[name="fecha de nacimiento"]').value;

    // Crear un objeto JSON con los datos
    var datos = {
        "nombreApellido": nombreApellido,
        "correoElectronico": correoElectronico,
        "fechaNacimiento": fechaNacimiento
    };

    // Convertir el objeto JSON a una cadena
    var datosJSON = JSON.stringify(datos);

    // Guardar los datos en localStorage
    localStorage.setItem("formularioData", datosJSON);

    // Evitar que el formulario se envíe a través de HTTP
    return false;
}

// Función para cargar los datos del formulario desde localStorage
function cargarDatos() {
    var datosJSON = localStorage.getItem("formularioData");

    if (datosJSON) {
        var datos = JSON.parse(datosJSON);

        // Llenar los campos del formulario con los datos recuperados
        document.querySelector('input[name="nombre y apellido"]').value = datos.nombreApellido;
        document.querySelector('input[name="correo_electronico"]').value = datos.correoElectronico;
        document.querySelector('input[name="fecha de nacimiento"]').value = datos.fechaNacimiento;
    }
}

// Asignar la función cargarDatos al evento onload del formulario
document.querySelector('.formulario').onload = cargarDatos;
