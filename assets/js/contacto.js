

  const emailValido=correo=>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}
let btnEnviar=document.getElementById("btnEnviar");
let myForm=document.getElementById("myForm");
btnEnviar.addEventListener("click", validarFormulario);

function validarFormulario(){
    console.log('validar');

    let tipoconsulta=document.getElementById("tipoconsulta");
    let nombre=document.getElementById("nombre");
    let correo=document.getElementById("correo");
    let falta= "";
    
    if ((tipoconsulta.options[tipoconsulta.selectedIndex].value) == 0) {
        falta +="Falta completar el tipo de consulta\n";
        tipoconsulta.focus();
      
    } 
    if ((nombre.value.trim().length) < 3) {
        falta +="Falta completar el nombre\n";
        nombre.focus();
       
    }
    if ((correo.value.trim().length) < 3 || !emailValido(correo.value)) {
        falta +="Falta completar el Email\n";
        correo.focus();       
    } 
     
    if ((falta.trim().length) > 0) {
        console.log('falta '+ falta);
        alert(falta);
    }else{
        console.log('todo ok '+ falta);
        alert('Todo parece correcto, falta implementar el submit');
        //myForm.submit();
        return;
    }
 

}