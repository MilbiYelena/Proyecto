const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;    
}

function closeImg(){
    fulImgBox.style.display = "none";

}


function iniciarMap(){
    var coord = {lat:-38.9571176, lng: -68.0457003};
    var map = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


function enviarCorreo() { 

  var nombre = document.getElementById("form_contacto").nombre.value;
  var email =  document.getElementById("form_contacto").email.value;
  var asunto =  document.getElementById("form_contacto").asunto.value;
  var mensaje =  document.getElementById("form_contacto").mensaje.value;
  
  var sLink = "mailto: " + email
	+ "?subject=" + asunto
	+ "&body=" + "Mi nombre es: " + nombre + " - Mensaje:"+ mensaje;
	window.location.href = sLink;

  
}