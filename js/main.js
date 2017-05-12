// Debe contener las validaciones del formulario y desarrollar la función que muestra los datos en la seccion siguiente.
// - Ningun campo puede quedar vacio
// - El checkbox debe estar seleccionado para enviar los datos y el select debe tener seleccionada una opcion.
// - Completar la funcion que muestre los datos del usuario ingresados en el formulario.

//Creo un objeto cliente
function Cliente(nombre, apellido, email, direccion, telefono, select, test5) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
    this.select = select;
    this.test5 = test5;
}

// Selector
$(document).ready(function() {
    $('select').material_select();
});

// Captura de datos
function mostrarData() {
    //Obteniendo los valores de lo ingresado al formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var select = document.getElementById('select').value;
    var test5 = document.getElementById('test5').value;

    //Ingreso cada usuario al objeto
    var persona = new Cliente(nombre, apellido, email, direccion, telefono, select, test5);

    //Ingreso cada cliente en un arreglo
    var clientesTeteria = [];
    clientesTeteria.push(persona);
    console.log(clientesTeteria);

    //Id de la section donde se mostrarán los datos "clientes"
    var contenedor = document.getElementById('clientes');
    var contenido = '';
    // console.log(nombre);
    // console.log(apellido);
    // console.log(email);
    // console.log(direccion);
    // console.log(telefono);
    // console.log(select);
    // console.log(test5);
}