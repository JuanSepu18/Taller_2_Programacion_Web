function show_gustos(){
  botongustos = document.getElementById("gustos");

  if((botongustos.checked)){
    document.getElementById("gustosseccion").style.display = 'block';
  }else{
    document.getElementById("gustosseccion").style.display = 'none';
  }
}

// Mostrar el cuadro de validaciones de la contraseña
function showPasswordValidation(){
  document.getElementsByClassName("passwordValidationsContainer")[0].style.display= 'contents';
}

// Validaciones del campo username
function checkUser(){
  let field =  document.getElementById("username");
  validateField(field, document.getElementById("usernameSpecialChar"), /^\w*$/);
  validateField(field, document.getElementById("usernameMax"),/^.{0,20}$/);
  validateField(field, document.getElementById("usernameMin"),/^.{10,}$/);
  validateField(field, field.querySelector(".error_required"), /^.+/g);
}

// Validaciones del campo password
function checkPassword(){
  validatePassword(document.getElementById("passwordMax"),/^.{15,20}$/);
  validatePassword(document.getElementById("passwordUppercase"),/[A-Z]+/g);
  validatePassword(document.getElementById("passwordNumbers"),/[0-9]+/g);
  validatePassword(document.getElementById("passwordSpecialChar"),/[#%\/&]+/g);
  validateField(document.getElementById("password"), document.getElementById("passwordRequired"), /^.+/g);
  checkConfirmation()
}

function checkEmail(){
  validateField(document.getElementById("email"),document.getElementById("emailMax"), /^.{0,120}$/ );
  validateField(document.getElementById("email"), document.getElementById("emailValido"),/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/);
  validateField(document.getElementById("email"), document.getElementById("emailRequired"), /^.+/g);
}

function checkConfirmation(){
// Valida que la contraseña este validada
  if(Array.from(
    document.getElementsByClassName("passwordValidation"))
    .filter(validation => validation.innerText.includes('❌')).length === 0
    && document.getElementById("confirm_password").value != ''){
    if(document.getElementById("confirm_password").value != document.getElementById("password").value){
        document.getElementById("confirm_passwordError").classList.add("showError");
      }
      else{
        document.getElementById("confirm_passwordError").classList.remove("showError");
      }
  }
  validateField(document.getElementById("confirm_password"), document.getElementById("confirm_passwordRequired"), /^.+/g);
}

/**
 * Validar campo de contraseña. Campiar x por chulito si es valido
 * error - elemento span del error
 * regex - exprecion regular que debería seguir el campo
 * La clase showError sirve como bandera para validar errores al mandar el formulario
 */
function validatePassword(error, regex) {
  if(!regex.test(document.getElementById("password").value)){
    error.innerText = error.innerText.replace('✅', '❌');
    error.classList.add("showError");
  }
  else{
    error.innerText = error.innerText.replace('❌', '✅');
    error.classList.remove("showError");
  }
}

/**
 * Validar campos
 * element - elemento que se quiere validar
 * error - elemento span del error
 * regex - exprecion regular que debería seguir el campo
 */
function validateField(element, error, regex) {
  if(!regex.test(element.value)){
    error.classList.add("showError");
  }
  else{
    error.classList.remove("showError");
  }
}


// Enviar formulario haciendo las validaciones correspondientes
function sendForm(e){
  e.preventDefault(); // para que no se envie solo
  comprobacion();

  // Comprobar que los campos requeridos esten llenos
  document.querySelectorAll(".required").forEach(requiredField => {
    validateField(requiredField.querySelector("input"), requiredField.querySelector(".error_required"), /.+/g);
  });

  let validacionFailed = false;
  document.querySelectorAll(".form_field").forEach(formField => {
    if(formField.querySelectorAll(".showError").length > 0){
      validacionFailed = true;
    }
  });
  if(validacionFailed){
    alert("Errores en el formulario");
  }
  else{
    alert("💫​ Mandando formulario... 💫​");
  }

}

function comprobacion(){

  nombre = document.getElementById("nombre");
  apellido = document.getElementById("apellido");
  direccion = document.getElementById("direccion");
  var valordireccion = direccion.value; 
  if(nombre.value.length>25){
    document.getElementById("error1").classList.add("showError");
  }
  else{
    document.getElementById("error1").classList.remove("showError");
  }

  if(apellido.value.length>25){
    document.getElementById("error2").classList.add("showError");
  }
  else{
    document.getElementById("error2").classList.remove("showError");
  }

  if(!/^cll|Cll|cra|Cra|Av|av|Anv|anv|Trans|trans/g.test(valordireccion)){
    document.getElementById("error3").classList.add("showError");
  }
  else{
    document.getElementById("error3").classList.remove("showError");
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
