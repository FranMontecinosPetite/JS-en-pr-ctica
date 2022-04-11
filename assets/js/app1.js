let form = document.getElementById('formulario');

form.addEventListener('submit', function(event){
    event.preventDefault();
    limpiarErrores();
    let textNombre = document.querySelector('#nombre').value;
    let textAsunto = document.querySelector('#asunto').value;
    let textMensaje = document.querySelector('#mensaje').value;

    let resultado = validar(textNombre, textAsunto, textMensaje);

    if (resultado == true){
        exito();
    };
});

function limpiarErrores(){
    document.querySelector('.resultado').innerHTML ='';
    document.querySelector('.errorNombre').innerHTML ='';
    document.querySelector('.errorAsunto').innerHTML ='';
    document.querySelector('.errorMensaje').innerHTML ='';
};

function exito(){
    document.querySelector('.resultado').innerHTML = "Mensaje enviado con éxito !!!"
};

function validar(nombre, asunto, mensaje) {
    let validado = true;

    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector('.errorNombre').innerHTML = 'Un nombre válido es requerido.';
        validado = false;
    };
    let validacionAsunto = /[a-zA-Z]/gim;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector('.errorAsunto').innerHTML = 'Un asunto válido es requerido.';
        validado = false;
    };
    let validacionMensaje = /[a-zA-Z]/gim;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector('.errorMensaje').innerHTML = 'Un mensaje válido es requerido.';
        validado = false;
    };
    return validado;
};