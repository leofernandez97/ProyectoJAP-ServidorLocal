
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    const recentImageDataUrl = localStorage.getItem("img");
    //si no se ha subido ninguna img que muestre esa img
    if (recentImageDataUrl == null){
        slotImg = document.querySelectorAll(".imgPerfil");
        for (let i = 0; i < slotImg.length; i++) {
            slotImg[i].setAttribute("src", "https://i.ibb.co/jJcP5T1/profile-photo-empty.png");
            
        }
    }
    //si hay img la muestra en imgPerfil
    if(recentImageDataUrl){
        slotImg = document.querySelectorAll(".imgPerfil");
        for (let i = 0; i < slotImg.length; i++) {
            slotImg[i].setAttribute("src", recentImageDataUrl);
            
        }
    }
});