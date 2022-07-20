function show_gustos(){
  botongustos = document.getElementById("gustos");

  if((botongustos.checked)){
    document.getElementById("gustosseccion").style.display = 'block';
  }else{
    document.getElementById("gustosseccion").style.display = 'none';
  }
}

function comprobacion(){

  nombre = document.getElementById("nombre");
  apellido = document.getElementById("apellido");
  direccion = document.getElementById("direccion");
  var valordireccion = direccion.value; 
  if(nombre.value.length>25){

    document.getElementById("error1").style.visibility = 'visible';

  }

  if(apellido.value.length>25){

    document.getElementById("error2").style.visibility = 'visible';

  }

  if(valordireccion.startsWith("cll")||valordireccion.startsWith("cra")||valordireccion.startsWith("av")||valordireccion.startsWith("anv")||valordireccion.startsWith("trans")){



  } else{

    document.getElementById("error3").style.visibility = 'visible';

  }
}

function getVals(){
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
      var slide1 = parseFloat( slides[0].value );
      var slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    var displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = slide1 + " - " + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
        for( var x = 0; x < sliderSections.length; x++ ){
          var sliders = sliderSections[x].getElementsByTagName("input");
          for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }
