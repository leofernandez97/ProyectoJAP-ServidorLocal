var product = {};
let comment = {};
let productoRelac = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];
        //La primer img es la que queda activa, la primer img es i=0
        if (i === 0){

        htmlContentToAppend += `
            <div class="carousel-item active">
                  <img class="d-block imgCarousel" src="`+imageSrc+`">
            </div>
        `
        }else{
            //Si no es la primera entonces no va active
            htmlContentToAppend +=`
            <div class="carousel-item">
                  <img class="d-block imgCarousel" src="`+imageSrc+`">
            </div>
        `
        }
        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showRelatedProducts(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let posicion = array[i];

        htmlContentToAppend += `
        
            <div class="card card-prod-rel m-2 bg-light">
                <a id="link-a" href="product-info.html">
                    <img class="card-img-top d-block" src="`+ productoRelac[posicion].imgSrc +`" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title text-center ">`+ productoRelac[posicion].name +`</h3>
                        <hr>
                        <p class="card-text text-center">`+ productoRelac[posicion].description +`</p>
                    </div>
                    <div class="card-footer">
                        <h4 class=" text-center">`+productoRelac[posicion].currency + productoRelac[posicion].cost+`</h4>
                    </div>
                </a>
            </div>
       
        `

        document.getElementById("productRelatedProducts").innerHTML = htmlContentToAppend;
    }
}


function showComments(array){
        let htmlContentToAppend = "";
        
        for(let i = 0; i < array.length; i++){
            let comment = array[i];
            
            let auxStars = comment.score;
            htmlContentToAppend += `
            <div class="card mb-2">
                <div class="d-block">
                    <div class="card-header align-user w-100">
                    <div class="col font-italic m-0 pl-0">`+comment.user+`</div><div class="col text-right "> Calificación: `+ratingStars(auxStars)+`</div>
                    </div>
                </div>
                <div class="card-body ">
                    <blockquote class="blockquote mb-0">
                    <p>`+comment.description+`</p>
                    <div class="blockquote-footer text-right m-0">`+comment.dateTime+`</div>
                    </blockquote>
                </div>
            </div>
            `
    
            document.getElementById("comentarios-prod").innerHTML = htmlContentToAppend;
        }
    }


    function ratingStars(int){
        let stars;
        if(int === 1){
            stars ='<span class="fa fa-star starChecked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
        }else if (int === 2){
            stars = '<span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
        }else if (int === 3){
            stars='<span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
        }else if (int === 4){
            stars='<span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star"></span>'
        }else if (int === 5){
            stars='<span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span><span class="fa fa-star starChecked"></span>'
        }else{
          stars ='<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
        }
        return stars;
      }


      
        
      
    

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function (resultObj){
        if(resultObj.status === "ok")
        {
            productoRelac = resultObj.data;
            
        }
    });
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCurrencyAndCostHTML = document.getElementById("productCurrency");
            let productSoldCountHTML = document.getElementById("productSoldCount");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCurrencyAndCostHTML.innerHTML = product.currency + ` ` + product.cost;
            productSoldCountHTML.innerHTML = product.soldCount;
            
            
            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
            //Muestro imagenes de los productos relacionados
            showRelatedProducts(product.relatedProducts);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if(resultObj.status === "ok")
        {
            comment = resultObj.data;

            
            showComments(comment);
        }
    
    });

    
    
    });
