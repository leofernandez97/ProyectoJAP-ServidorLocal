let scoreNewComment;
$(".btn-success").click(function (event) {
  
  let arrayComment = document.getElementsByClassName("formComment"); //Guardo todos los tags con .formComment

  dateComment = arrayComment[1].value; //tomo los valores de cada tag
  textComment = arrayComment[2].value;
  userComment = arrayComment[0].value;


    
  
      if ($("#ratingForm :radio:checked").length == 0) {
        scoreNewComment = 0;
      } else {
        scoreNewComment = parseInt($("input:radio[name=rating]:checked").val(), 10);
      }
      
   

  //con jquery los agrego DESPUES de el tag con id comentarios-prod
  $("#comentarios-prod").append(
    '<div class="card mb-2"><div class="d-block"><div class="card-header align-user w-100"><div id="userNewComment"class="col font-italic m-0 pl-0">' +
      userComment + ' <div class="col text-right "> Calificación: ' + ratingStars(scoreNewComment) + ' </div></div></div><div class="card-body "><blockquote class="blockquote mb-0"><p>' +
      textComment +
      '</p><div class="blockquote-footer text-right m-0">' +
      dateComment +
      "</div></blockquote></div></div>"
  );
  //limpio textarea
  document.getElementById("textComment").value = "";
});

// HORA ACTUAL
function getDateTime() {
  var now     = new Date(); 
  var year    = now.getFullYear();
  var month   = now.getMonth()+1; 
  var day     = now.getDate();
  var hour    = now.getHours();
  var minute  = now.getMinutes();
  var second  = now.getSeconds(); 
  if(month.toString().length == 1) {
       month = '0'+month;
  }
  if(day.toString().length == 1) {
       day = '0'+day;
  }   
  if(hour.toString().length == 1) {
       hour = '0'+hour;
  }
  if(minute.toString().length == 1) {
       minute = '0'+minute;
  }
  if(second.toString().length == 1) {
       second = '0'+second;
  }   
  var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
   return dateTime;
}

// DEVUELVE HORA
setInterval(function(){
  currentTime = getDateTime();
  document.getElementById("dateComment").value = currentTime;
}, 1000);


