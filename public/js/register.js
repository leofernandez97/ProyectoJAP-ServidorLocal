function registrarse(){
    email = document.getElementById('inputEmail')
    usuario = document.getElementById('inputUser');
    contrasenia = document.getElementById('inputPass');
    primerNombre = document.getElementById('inputFirstName');
    segundoNombre = document.getElementById('inputSecondName');
    primerApellido = document.getElementById('inputFirstSurename');
    segundoApellido = document.getElementById('inputSecondSurename');
    inputTelefono = document.getElementById('inputTel');
    
    let nuevosDatos = {
        email: email.value,
        user: usuario.value,
        pass: contrasenia.value,
        firstName: primerNombre.value,
        secondName: segundoNombre.value,
        firstSurename: primerApellido.value,
        secondSurename: segundoApellido.value,
        telefono: inputTelefono.value
        
    };
    localStorage.setItem("datosUsu",JSON.stringify(nuevosDatos))
    alert("Cuenta creada correctamente");
    window.location.replace("./login.html")
}