window.onscroll = function(){myfunction()};

var secciones = document.getElementsByTagName("section");
var fechas = document.getElementsByClassName("fecha");

function myfunction(){
  if(window.pageYOffset >= secciones[0].OffsetTop){ 
    eliminaclase(); 
  }
  
  if(window.pageYOffset >= secciones[1].offsetTop - 100){
    eliminaclase();
    fechas[0].classList.add("seleccionado");
  } 
  if(window.pageYOffset >= secciones[2].offsetTop - 100){
    eliminaclase();
    fechas[1].classList.add("seleccionado");
  }
  if(window.pageYOffset >= secciones[3].offsetTop - 100){
    eliminaclase();
    fechas[2].classList.add("seleccionado");
  }
  if(window.pageYOffset >= secciones[4].offsetTop - 100){
    eliminaclase();
    fechas[3].classList.add("seleccionado");
  }
  if(window.pageYOffset >= secciones[5].offsetTop - 100){
    eliminaclase();
    fechas[4].classList.add("seleccionado");
  } 
  if(window.pageYOffset >= secciones[6].offsetTop - 100){
    eliminaclase();
    fechas[5].classList.add("seleccionado");

  }
 

}

function eliminaclase(){
  for(i=0; i < fechas.length; i++){
    fechas[i].classList.remove("seleccionado");
  }
}  

  function irArriba(pxPantalla){
    window.addEventListener('scroll', () => {
       var scroll = document.documentElement.scrollTop;
       console.log(scroll);
       var botonArriba = document.getElementById('botonArriba');

        if(scroll > 300){
           botonArriba.style.right = 20 + "px";
        } else{
           botonArriba.style.right = -100 + "px";
       }
    })

    
}

irArriba();