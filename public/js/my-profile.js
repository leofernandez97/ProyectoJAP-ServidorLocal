datos = [];
slotImg = [];
function guardarDatos(){
    primerNombre = document.getElementById('inputFirstName');
    segundoNombre = document.getElementById('inputSecondName');
    primerApellido = document.getElementById('inputFirstSurename');
    segundoApellido = document.getElementById('inputSecondSurename');
    inputEmail = document.getElementById('inputEmail');
    inputTelefono = document.getElementById('inputTel');
    
    let nuevosDatos = {
        firstName: primerNombre.value,
        secondName: segundoNombre.value,
        firstSurename: primerApellido.value,
        secondSurename: segundoApellido.value,
        email: inputEmail.value,
        telefono: inputTelefono.value
        
    };
    localStorage.setItem("datosUsu",JSON.stringify(nuevosDatos))
    $('.alert').show()
}

function devolverDatos(){
    
    if(localStorage.getItem("datosUsu") !== null){
        datosGuardados = JSON.parse(localStorage.getItem("datosUsu"));
        document.getElementById('inputFirstName').value = datosGuardados.firstName;
        document.getElementById('inputSecondName').value = datosGuardados.secondName;
        document.getElementById('inputFirstSurename').value = datosGuardados.firstSurename;
        document.getElementById('inputSecondSurename').value = datosGuardados.secondSurename;
        document.getElementById('inputEmail').value = datosGuardados.email;
        document.getElementById('inputTel').value = datosGuardados.telefono;
    }
}

function borrarDatos(){
    localStorage.removeItem("datosUsu");
}

document.querySelector("#inputImg").addEventListener("change", function (){
    //cuando hay un cambio en el input ejecuta este codigo

    //creo un lector de archivos
    const reader = new FileReader();

    //cuando el lector "lee" la url la guarda en el local storage
    reader.addEventListener("load", () =>{
        localStorage.setItem("img", reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    devolverDatos()
});