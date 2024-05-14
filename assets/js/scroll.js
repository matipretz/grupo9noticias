

let subir=document.getElementById("arriba");
subir.addEventListener("click", ()=>{
    console.log('subiendo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

 

 