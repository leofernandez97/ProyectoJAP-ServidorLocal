// Funcion que valida logueo.
function validar(){
  user = JSON.parse(localStorage.getItem("datosUsu"));
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let expresion = /\w+@\w+\.+[a-z]/;
  
  if (username === "" || password === "") {
    alert("Debe ingresar usuario y contraseña");
    return false;
  }  else {
    if (user.user != username && username != user.email){
      alert("Usuario incorrecto");
    }else if(user.pass != password){
      alert("Contraseña incorrecta")
    }else{
      localStorage.setItem("user", username);
    logueado = "true";
    localStorage.setItem("estaLogueado", logueado);
    window.location.replace("./index.html")
    alert("Disfrute su estadia en la pagina");
    }
  }

}

function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let expresion = /\w+@\w+\.+[a-z]/;

  if (username === "" || password === "") {
    alert("Debe ingresar usuario y contraseña");
    return false;
  } else if (!expresion.test(username)) {
    alert("Correo inválido");
    return false;
  } else {
    localStorage.setItem("user", username);
    logueado = "true";
    localStorage.setItem("estaLogueado", logueado);
    window.location.replace("./index.html")
    alert("Disfrute su estadia en la pagina");    
  }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {});