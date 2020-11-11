const CATEGORIES_URL = "http://localhost:8000/json/category/all.json";
const PUBLISH_PRODUCT_URL = "http://localhost:8000/json/product/publish.json";
const CATEGORY_INFO_URL = "http://localhost:8000/json/category/1234.json";
const PRODUCTS_URL = "http://localhost:8000/json/product/all.json";
const PRODUCT_INFO_URL = "http://localhost:8000/json/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:8000/json/product/5678-comments.json";
const CART_INFO_URL = "http://localhost:8000/json/cart/987.json";
const CART_BUY_URL = "http://localhost:8000/json/cart/buy.json";
const CARTS_INFO_URL = "http://localhost:8000/json/cart/654.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function cerrarSesion(){
  localStorage.removeItem("user");
  localStorage.setItem("estaLogueado", false);
  location.replace("./login.html")
}





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  
});